import React, { useEffect, useState } from 'react';

const TerminalTyping = ({ lines, typingSpeed = 70, lineDelay = 400 }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    
    if (currentCharIndex <= currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines[currentLineIndex]) {
            newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex);
          } else {
            newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex);
          }
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, lineDelay);
      
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed, lineDelay]);

  return (
    <div className="font-mono text-sm space-y-1">
      {displayedLines.map((line, idx) => (
        <div key={idx} className="text-gray-300">
          {line}
          {idx === currentLineIndex && currentCharIndex <= lines[currentLineIndex]?.length && (
            <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TerminalTyping;