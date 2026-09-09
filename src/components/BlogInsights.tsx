import React from 'react';
import { ArrowRight, BookOpen, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/websiteData';

interface BlogInsightsProps {
  onOpenConsultation: () => void;
}

export const BlogInsights: React.FC<BlogInsightsProps> = ({ onOpenConsultation }) => {
  return (
    <section id="insights" className="py-20 lg:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
              Knowledge & Research
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Architectural Insights & Field Notes
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Perspectives on climate-conscious architecture, turnkey project management, and luxury material curation in Bengaluru.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#B89366]" />
            <span className="text-xs text-stone-500 font-mono">
              Curated by Our Principal Architects
            </span>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post: BlogPost) => (
            <div 
              key={post.id}
              className="group rounded-xl bg-[#FAF8F5] border border-stone-200/90 overflow-hidden hover:border-[#C5A880] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-[#1A1E24]/90 backdrop-blur-md text-[#C5A880] text-[10px] font-mono uppercase tracking-wider font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-stone-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#B89366]" />
                      {post.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B89366]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#B89366] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Key Takeaways */}
                  <div className="pt-3 border-t border-stone-200 space-y-2">
                    <div className="text-[11px] font-mono uppercase font-semibold text-stone-500">
                      Key Takeaways:
                    </div>
                    <ul className="space-y-1.5">
                      {post.keyTakeaways.map((takeaway, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B89366] shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-200/60 mt-4">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-[#B89366] transition-colors pt-3"
                >
                  <span>Discuss This Approach With Us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B89366]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
