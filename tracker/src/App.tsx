import React, { useState, useMemo } from 'react';
import {
  roadmap,
  type Phase,
  type Topic,
  type SubTopic,
  type Importance,
  getTotalSubtopics,
} from './data/roadmap';
import { useProgress } from './hooks/useProgress';

type FilterType = 'All' | 'Critical' | 'Important' | 'Good to Know' | 'Incomplete' | 'Complete';

export default function App() {
  const { completedIds, toggleSubtopic, resetAll, isCompleted } = useProgress();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [showCadence, setShowCadence] = useState<boolean>(false);
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(() => new Set(['phase-0']));
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(() => new Set(['0-1']));

  const totalSubtopics = useMemo(() => getTotalSubtopics(roadmap), []);

  const priorityCounts = useMemo(() => {
    let critical = 0;
    let important = 0;
    let goodToKnow = 0;
    for (const phase of roadmap) {
      for (const topic of phase.topics) {
        for (const sub of topic.subtopics) {
          if (sub.importance === 'critical') critical++;
          else if (sub.importance === 'important') important++;
          else goodToKnow++;
        }
      }
    }
    return { critical, important, goodToKnow };
  }, []);

  const totalCompleted = useMemo(() => {
    let count = 0;
    for (const phase of roadmap) {
      for (const topic of phase.topics) {
        for (const sub of topic.subtopics) {
          if (completedIds.has(sub.id)) {
            count++;
          }
        }
      }
    }
    return count;
  }, [completedIds]);

  const overallPercentage = totalSubtopics > 0 ? Math.round((totalCompleted / totalSubtopics) * 100) : 0;

  // Toggle Phase accordion
  const togglePhase = (phaseId: string) => {
    setExpandedPhases((prev) => {
      const next = new Set(prev);
      if (next.has(phaseId)) {
        next.delete(phaseId);
      } else {
        next.add(phaseId);
      }
      return next;
    });
  };

  // Toggle Topic accordion
  const toggleTopic = (topicId: string) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedPhases(new Set(roadmap.map((p) => p.id)));
    setExpandedTopics(new Set(roadmap.flatMap((p) => p.topics.map((t) => t.id))));
  };

  const collapseAll = () => {
    setExpandedPhases(new Set());
    setExpandedTopics(new Set());
  };

  // Filter logic
  const matchesFilterOnly = (sub: SubTopic): boolean => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Critical') return sub.importance === 'critical';
    if (activeFilter === 'Important') return sub.importance === 'important';
    if (activeFilter === 'Good to Know') return sub.importance === 'good-to-know';
    if (activeFilter === 'Complete') return isCompleted(sub.id);
    if (activeFilter === 'Incomplete') return !isCompleted(sub.id);
    return true;
  };

  const filteredRoadmap = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return roadmap
      .map((phase) => {
        const phaseMatchesDirectly = query !== '' && phase.title.toLowerCase().includes(query);

        const filteredTopics = phase.topics
          .map((topic) => {
            const topicMatchesDirectly =
              query !== '' && (topic.title.toLowerCase().includes(query) || phaseMatchesDirectly);

            const filteredSubtopics = topic.subtopics.filter((sub) => {
              const matchesQuery =
                query === '' || topicMatchesDirectly || sub.title.toLowerCase().includes(query);
              if (!matchesQuery) return false;
              return matchesFilterOnly(sub);
            });

            return {
              ...topic,
              subtopics: filteredSubtopics,
            };
          })
          .filter((topic) => topic.subtopics.length > 0);

        return {
          ...phase,
          topics: filteredTopics,
        };
      })
      .filter((phase) => phase.topics.length > 0);
  }, [searchQuery, activeFilter, completedIds, isCompleted]);

  // Compute completion counts for original phase / topics
  const getPhaseStats = (phase: Phase) => {
    let completed = 0;
    let total = 0;
    for (const t of phase.topics) {
      for (const s of t.subtopics) {
        total++;
        if (completedIds.has(s.id)) completed++;
      }
    }
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percent };
  };

  const getTopicStats = (topic: Topic) => {
    let completed = 0;
    for (const s of topic.subtopics) {
      if (completedIds.has(s.id)) completed++;
    }
    return { completed, total: topic.subtopics.length };
  };

  const filterTabs: FilterType[] = ['All', 'Critical', 'Important', 'Good to Know', 'Incomplete', 'Complete'];

  const getFilterTabLabel = (tab: FilterType): string => {
    if (tab === 'All') return `All (${totalSubtopics})`;
    if (tab === 'Critical') return `Critical (${priorityCounts.critical})`;
    if (tab === 'Important') return `Important (${priorityCounts.important})`;
    if (tab === 'Good to Know') return `Good to Know (${priorityCounts.goodToKnow})`;
    if (tab === 'Complete') return `Complete (${totalCompleted})`;
    if (tab === 'Incomplete') return `Incomplete (${totalSubtopics - totalCompleted})`;
    return tab;
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="app-header">
        <div className="header-top">
          <div className="title-area">
            <h1>
              <span>⚡</span> Full-Stack TypeScript Tracker
            </h1>
            <p>24-Week Job-Ready Roadmap (4–5 hrs/day) • Anchored in Collab-Code &amp; Smart City Issue Reporting</p>
          </div>
          <div className="header-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setShowCadence((prev) => !prev)}
              title="Toggle 24-Week Job-Readiness & Interview Playbook"
            >
              {showCadence ? 'Hide Playbook' : '🎯 24-Week Playbook'}
            </button>
            <button type="button" className="btn-secondary" onClick={expandAll} title="Expand all phases and topics">
              Expand All
            </button>
            <button type="button" className="btn-secondary" onClick={collapseAll} title="Collapse all phases and topics">
              Collapse All
            </button>
            <button type="button" className="btn-secondary" onClick={resetAll} title="Reset all progress in localStorage">
              Reset
            </button>
          </div>
        </div>

        {/* Overall Progress Card */}
        <div className="progress-card">
          <div className="progress-card-header">
            <span className="progress-label">Overall Progress</span>
            <span className="progress-stats">
              <strong>{totalCompleted}</strong> / {totalSubtopics} subtopics ({overallPercentage}%)
            </span>
          </div>

          <div className="progress-bar-container">
            <div
              className={`progress-bar-fill ${overallPercentage === 100 ? 'complete' : ''}`}
              style={{ width: `${overallPercentage}%` }}
            />
          </div>

          <div className="quick-stats">
            <div className="quick-stats-item">
              Phases: <span>{roadmap.length}</span>
            </div>
            <div className="quick-stats-item">
              Total Topics: <span>{roadmap.reduce((acc, p) => acc + p.topics.length, 0)}</span>
            </div>
            <div className="quick-stats-item">
              Critical: <span>🔴 {priorityCounts.critical}</span>
            </div>
            <div className="quick-stats-item">
              Important: <span>🟡 {priorityCounts.important}</span>
            </div>
            <div className="quick-stats-item">
              Good-to-know: <span>🟢 {priorityCounts.goodToKnow}</span>
            </div>
          </div>

          {showCadence && (
            <div className="phase-footer" style={{ marginTop: '1rem' }}>
              <div className="footer-section project-context">
                <span className="footer-section-label">⏱️ Daily 4.5-Hour Study Allocation (30–32 hrs/week)</span>
                <p className="footer-section-text">
                  <strong>2.5 hrs:</strong> Core concept mastery + hands-on implementation in mini-builds, Collab-Code &amp; Smart City •{' '}
                  <strong>1.0 hr:</strong> Debugging, automated testing, and refactoring •{' '}
                  <strong>1.0 hr:</strong> Active recall revision, 2-min verbal explain-backs, and timed interview drills.
                </p>
              </div>
              <div className="footer-section gate">
                <span className="footer-section-label">🎤 Early &amp; Continuous Interview Milestones (Starting Week 1)</span>
                <p className="footer-section-text">
                  <strong>Weeks 1–4:</strong> Daily verbal explain-backs &amp; timed JS async/closure output drills •{' '}
                  <strong>Weeks 5–6:</strong> Mock Interview #1 (TS, JS Runtime, Web Security) •{' '}
                  <strong>Weeks 7–10:</strong> Mock Interview #2 (Node.js, REST APIs, JWT/RBAC) + Resume Backend Bullets •{' '}
                  <strong>Weeks 11–13:</strong> Timed SQL/Prisma query drills &amp; Smart City DB deep walkthrough •{' '}
                  <strong>Weeks 14–16:</strong> Mock Interview #3 (React, Next.js 15/16 RSC &amp; Caching) + 90-min Machine Coding •{' '}
                  <strong>Weeks 17–20:</strong> Collab-Code WebSocket/BullMQ defense + Mock Interview #4 (Testing &amp; Bug Bash) •{' '}
                  <strong>Weeks 21–24:</strong> Production deployment sign-off, README diagrams, and Full-Loop Mock Interviews #5 &amp; #6.
                </p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search & Filter Controls */}
      <section className="controls-bar" aria-label="Filters and Search">
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search topics or subtopics (e.g. 'RFC 9457', 'variance', 'use cache', 'AbortController')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-tabs" role="tablist">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`filter-tab ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab === 'Critical' && '🔴 '}
              {tab === 'Important' && '🟡 '}
              {tab === 'Good to Know' && '🟢 '}
              {getFilterTabLabel(tab)}
            </button>
          ))}
        </div>
      </section>

      {/* Phases Accordion List */}
      <main className="phases-container">
        {filteredRoadmap.length === 0 ? (
          <div className="empty-state">
            <h3>No topics matched your search or filter</h3>
            <p>Try adjusting your query or resetting the filter tab.</p>
          </div>
        ) : (
          filteredRoadmap.map((filteredPhase) => {
            // Find original phase to compute stats accurately
            const originalPhase = roadmap.find((p) => p.id === filteredPhase.id) || filteredPhase;
            const phaseStats = getPhaseStats(originalPhase);
            const isPhaseOpen = expandedPhases.has(filteredPhase.id) || searchQuery.trim().length > 0;

            return (
              <div key={filteredPhase.id} className="phase-card">
                {/* Phase Header */}
                <div
                  className="phase-header"
                  onClick={() => togglePhase(filteredPhase.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      togglePhase(filteredPhase.id);
                    }
                  }}
                >
                  <div className="phase-header-main">
                    <div className="phase-title-group">
                      <span className="phase-emoji">{filteredPhase.emoji}</span>
                      <div className="phase-meta">
                        <div className="phase-meta-tags">
                          <span className="phase-number">Phase {filteredPhase.number}</span>
                          {filteredPhase.weeks && (
                            <span className="phase-weeks-badge">{filteredPhase.weeks}</span>
                          )}
                        </div>
                        <h2 className="phase-title">{filteredPhase.title}</h2>
                      </div>
                    </div>

                    <div className="phase-metrics">
                      <span className={`phase-badge ${phaseStats.percent === 100 ? 'complete' : ''}`}>
                        {phaseStats.completed}/{phaseStats.total} ({phaseStats.percent}%)
                      </span>
                      <span className={`expand-chevron ${isPhaseOpen ? 'open' : ''}`}>▼</span>
                    </div>
                  </div>

                  <p className="phase-description">{filteredPhase.description}</p>

                  <div className="phase-progress-bar-wrap">
                    <div className="phase-progress-bar">
                      <div
                        className={`phase-progress-fill ${phaseStats.percent === 100 ? 'complete' : ''}`}
                        style={{ width: `${phaseStats.percent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Phase Content */}
                {isPhaseOpen && (
                  <div className="phase-body">
                    <div className="topics-list">
                      {filteredPhase.topics.map((topic) => {
                        const originalTopic =
                          originalPhase.topics.find((t) => t.id === topic.id) || topic;
                        const topicStats = getTopicStats(originalTopic);
                        const isTopicOpen =
                          expandedTopics.has(topic.id) || searchQuery.trim().length > 0;

                        return (
                          <div key={topic.id} className="topic-item">
                            {/* Topic Header */}
                            <div
                              className="topic-header"
                              onClick={() => toggleTopic(topic.id)}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  toggleTopic(topic.id);
                                }
                              }}
                            >
                              <div className="topic-title-area">
                                <span className={`topic-indicator ${isTopicOpen ? 'open' : ''}`}>
                                  ▶
                                </span>
                                <span>{topic.title}</span>
                              </div>
                              <div className="topic-counts">
                                <span
                                  className={`topic-pill ${
                                    topicStats.completed === topicStats.total && topicStats.total > 0
                                      ? 'complete'
                                      : ''
                                  }`}
                                >
                                  {topicStats.completed}/{topicStats.total}
                                </span>
                              </div>
                            </div>

                            {/* Subtopics List */}
                            {isTopicOpen && (
                              <div className="subtopics-list">
                                {topic.subtopics.map((sub) => {
                                  const done = isCompleted(sub.id);
                                  return (
                                    <label
                                      key={sub.id}
                                      className={`subtopic-item ${done ? 'done' : ''}`}
                                    >
                                      <div className="custom-checkbox-wrap">
                                        <input
                                          type="checkbox"
                                          className="custom-checkbox"
                                          checked={done}
                                          onChange={() => toggleSubtopic(sub.id)}
                                        />
                                      </div>
                                      <div className="subtopic-content">
                                        <span className="subtopic-title">{sub.title}</span>
                                        <span className={`importance-badge ${sub.importance}`}>
                                          {sub.importance === 'critical' && '🔴 '}
                                          {sub.importance === 'important' && '🟡 '}
                                          {sub.importance === 'good-to-know' && '🟢 '}
                                          {sub.importance.replace('-', ' ')}
                                        </span>
                                      </div>
                                    </label>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Phase Footer (Project Anchor, Outcomes, Mini-Build, Gate) */}
                    <div className="phase-footer">
                      {filteredPhase.projectContext && (
                        <div className="footer-section project-context">
                          <span className="footer-section-label">🎯 Project Anchor</span>
                          <p className="footer-section-text">{filteredPhase.projectContext}</p>
                        </div>
                      )}
                      {filteredPhase.outcomes && filteredPhase.outcomes.length > 0 && (
                        <div className="footer-section outcomes">
                          <span className="footer-section-label">📋 Learning Outcomes</span>
                          <ul className="footer-outcomes-list">
                            {filteredPhase.outcomes.map((outcome, idx) => (
                              <li key={idx}>{outcome}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="footer-section mini-build">
                        <span className="footer-section-label">🛠️ Mini-Build</span>
                        <p className="footer-section-text">{filteredPhase.miniBuild}</p>
                      </div>
                      <div className="footer-section gate">
                        <span className="footer-section-label">🚪 Completion Gate (Explain, Implement, Debug, Apply)</span>
                        <p className="footer-section-text">{filteredPhase.gate}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </main>
    </div>
  );
}
