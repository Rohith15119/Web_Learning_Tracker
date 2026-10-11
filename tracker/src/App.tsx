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
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(() => new Set(['phase-0']));
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(() => new Set(['0-1']));

  const totalSubtopics = useMemo(() => getTotalSubtopics(roadmap), []);

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
  const matchesSubtopic = (sub: SubTopic): boolean => {
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = query === '' || sub.title.toLowerCase().includes(query);
    if (!matchesSearch) return false;

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
        const filteredTopics = phase.topics
          .map((topic) => {
            const topicMatchesDirectly = query !== '' && topic.title.toLowerCase().includes(query);

            const filteredSubtopics = topic.subtopics.filter((sub) => {
              if (topicMatchesDirectly && (activeFilter === 'All' || activeFilter === 'Complete' || activeFilter === 'Incomplete')) {
                if (activeFilter === 'Complete') return isCompleted(sub.id);
                if (activeFilter === 'Incomplete') return !isCompleted(sub.id);
                return true;
              }
              return matchesSubtopic(sub);
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

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="app-header">
        <div className="header-top">
          <div className="title-area">
            <h1>
              <span>⚡</span> Full-Stack TypeScript Tracker
            </h1>
            <p>Track your journey from TypeScript core to production scale architecture</p>
          </div>
          <div className="header-actions">
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
              Critical: <span>🔴</span>
            </div>
            <div className="quick-stats-item">
              Important: <span>🟡</span>
            </div>
            <div className="quick-stats-item">
              Good-to-know: <span>🟢</span>
            </div>
          </div>
        </div>
      </header>

      {/* Search & Filter Controls */}
      <section className="controls-bar" aria-label="Filters and Search">
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search topics or subtopics (e.g. 'closures', 'docker', 'event loop')..."
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
              {tab}
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
                        <span className="phase-number">Phase {filteredPhase.number}</span>
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

                    {/* Phase Footer (Gate & Mini-Build) */}
                    <div className="phase-footer">
                      <div className="footer-section gate">
                        <span className="footer-section-label">🚪 Gate Requirement</span>
                        <p className="footer-section-text">{filteredPhase.gate}</p>
                      </div>
                      <div className="footer-section mini-build">
                        <span className="footer-section-label">🛠️ Mini-Build</span>
                        <p className="footer-section-text">{filteredPhase.miniBuild}</p>
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
