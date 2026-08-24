import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Download } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, currentItem, onNext, onPrev }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setZoom(1);
  }, [currentItem]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Top Header Control Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <div className="text-white text-xs sm:text-sm font-semibold max-w-xs sm:max-w-md truncate bg-gray-900/80 px-4 py-2 rounded-2xl border border-gray-800 backdrop-blur-md">
          {currentItem.title || currentItem.caption || 'Certificate View'}
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Controls */}
          <div className="flex items-center gap-1 bg-gray-900/80 p-1.5 rounded-2xl border border-gray-800 backdrop-blur-md text-white">
            <button
              onClick={() => setZoom(prev => Math.max(0.5, prev - 0.25))}
              className="p-1.5 rounded-xl hover:bg-gray-800 transition"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono px-2">{Math.round(zoom * 100)}%</span>
            <button
              onClick={() => setZoom(prev => Math.min(2.5, prev + 0.25))}
              className="p-1.5 rounded-xl hover:bg-gray-800 transition"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoom(1)}
              className="p-1.5 rounded-xl hover:bg-gray-800 transition ml-1"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href={currentItem.image || currentItem.url}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gray-900/80 hover:bg-gray-800 text-white rounded-2xl border border-gray-800 backdrop-blur-md transition"
            title="Download Image"
          >
            <Download className="w-4 h-4" />
          </a>

          <button
            onClick={onClose}
            className="p-2.5 bg-rose-600/80 hover:bg-rose-600 text-white rounded-2xl border border-rose-500/50 transition"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 hover:bg-gray-800 text-white rounded-2xl border border-gray-800 backdrop-blur-md transition z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 hover:bg-gray-800 text-white rounded-2xl border border-gray-800 backdrop-blur-md transition z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Central View Container */}
      <div className="relative max-w-5xl max-h-[85vh] overflow-auto flex items-center justify-center p-2 rounded-2xl">
        <img
          src={currentItem.image || currentItem.url}
          alt={currentItem.title || 'Certificate'}
          style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s ease-out' }}
          className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-gray-800"
        />
      </div>
    </div>
  );
}
