
import React from 'react';
import { MOCK_COURSES } from '../constants';

const ELearning: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Farmers Academy</h1>
          <p className="text-slate-500 mt-2">Master modern techniques from industry experts and increase your yield.</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <p className="text-xs text-slate-400 uppercase font-semibold">Total Progress</p>
            <p className="font-bold text-green-600">65% Completed</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold border-4 border-green-200">
            3
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_COURSES.map((course) => (
          <div key={course.id} className="bg-white rounded-3xl border overflow-hidden hover:shadow-xl transition-all flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              <button className="absolute inset-0 bg-slate-900/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 transform group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4.516 7.548c0-.923.991-1.503 1.803-1.065l7.115 3.851c.822.445.822 1.638 0 2.083l-7.115 3.851c-.813.438-1.803-.142-1.803-1.065V7.548z" /></svg>
                </div>
              </button>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{course.title}</h3>
              <p className="text-sm text-slate-500 mb-4">By {course.instructor}</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center space-x-3 text-xs text-slate-400 font-medium">
                  <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} /></svg>{course.duration}</span>
                  <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth={2} /></svg>{course.lessons} Lessons</span>
                </div>
                <button className="text-green-600 font-bold hover:underline text-sm">Resume</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ELearning;
