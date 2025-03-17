import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Techstack = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  
  const skills = [
    { name: 'JavaScript', level: 85, category: 'Frontend', color: '#f0db4f' },
    { name: 'React', level: 80, category: 'Frontend', color: '#61dafb' },
    { name: 'Node.js', level: 82, category: 'Backend', color: '#68a063' },
    { name: 'Express', level: 78, category: 'Backend', color: '#828282' },
    { name: 'MongoDB', level: 75, category: 'Database', color: '#4db33d' },
    { name: 'MySQL', level: 72, category: 'Database', color: '#00758f' },
    { name: 'Git', level: 80, category: 'Tools', color: '#f34f29' },
    { name: 'Docker', level: 65, category: 'DevOps', color: '#0db7ed' },
    { name: 'Firebase', level: 70, category: 'Cloud', color: '#ffca28' },
    { name: 'C++', level: 75, category: 'Programming', color: '#004482' },
    { name: 'NextJS', level: 68, category: 'Frontend', color: '#000000' },
    { name: 'Redis', level: 60, category: 'Database', color: '#d82c20' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <Container fluid className="p-0">
      <h1 className="project-heading text-center mb-5">
        My <strong className="purple">Technical Skills</strong>
      </h1>
      
      <div className="mb-4 d-flex justify-content-center gap-2 flex-wrap">
        <button 
          className={`px-3 py-2 rounded-lg ${activeCategory === 'All' ? 'bg-purple-700 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveCategory('All')}
        >
          All
        </button>
        {categories.map(category => (
          <button 
            key={category}
            className={`px-3 py-2 rounded-lg ${activeCategory === category ? 'bg-purple-700 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <Row className="justify-content-center">
        <Col md={10}>
          <div className="skills-container relative w-full h-64 bg-gray-900 rounded-lg overflow-hidden">
            {/* Floating particles in background */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({ length: 40 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() * 6 + 2 + 'px',
                    height: Math.random() * 6 + 2 + 'px',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                    animation: `float ${Math.random() * 10 + 5}s infinite linear`
                  }}
                />
              ))}
            </div>
            
            {/* Skills visualization */}
            <div className="flex h-full items-center justify-center">
              {filteredSkills.map((skill, index) => {
                const angle = (index * (360 / filteredSkills.length)) * (Math.PI / 180);
                const radius = 120;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                
                return (
                  <div
                    key={skill.name}
                    className="absolute transition-all duration-500 cursor-pointer"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      zIndex: activeSkill === skill.name ? 10 : 1
                    }}
                    onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                  >
                    <div 
                      className="rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                      style={{
                        width: activeSkill === skill.name ? '80px' : '60px',
                        height: activeSkill === skill.name ? '80px' : '60px',
                        backgroundColor: skill.color,
                        transform: activeSkill === skill.name ? 'scale(1.2)' : 'scale(1)'
                      }}
                    >
                      <span className="text-white text-xs font-bold">{skill.name}</span>
                    </div>
                    
                    {activeSkill === skill.name && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white p-2 rounded-lg text-xs whitespace-nowrap">
                        <div className="font-bold">{skill.name}</div>
                        <div className="mt-1 w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="h-full rounded-full bg-purple-600"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <div className="text-right mt-1">{skill.level}%</div>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {activeSkill === null && (
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-2">Interactive Skills</div>
                  <div className="text-sm opacity-75">Click on any skill to see details</div>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
      
      {/* Legend */}
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {categories.map(category => (
              <div key={category} className="d-flex align-items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ 
                  backgroundColor: skills.find(s => s.category === category)?.color || '#ccc' 
                }}></div>
                <span className="text-sm">{category}</span>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Techstack;
