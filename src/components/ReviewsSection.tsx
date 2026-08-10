import React, { useState } from 'react';
import { PLATFORM_RATINGS, REVIEWS } from '../data/reviewsData';
import { Review } from '../types';
import { Star, MessageSquarePlus, CheckCircle2, X } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: '', platform: 'Google' as const, rating: 5, comment: '' });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: reviewForm.name,
      platform: reviewForm.platform,
      rating: Number(reviewForm.rating),
      comment: reviewForm.comment,
      date: 'Just now'
    };
    setReviewsList([newRev, ...reviewsList]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsReviewModalOpen(false);
      setReviewForm({ name: '', platform: 'Google', rating: 5, comment: '' });
    }, 1500);
  };

  return (
    <section id="reviews-section" className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
      
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-900">Guest Feedback</span>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-slate-900 mt-1">
          Guest Love &amp; Platform Ratings
        </h2>
        <div className="h-0.5 w-24 bg-blue-700 mx-auto mt-2"></div>
      </div>

      {/* Platform Ratings Summary Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {PLATFORM_RATINGS.map((p) => (
          <div
            key={p.platform}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center relative overflow-hidden"
          >
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">
              {p.platform}
            </span>

            <div className="flex items-center justify-center gap-1 my-1">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span className="font-serif-title font-bold text-2xl text-slate-900">{p.rating}</span>
              <span className="text-xs text-slate-400">/ 5</span>
            </div>

            <span className="text-[10px] text-slate-500 font-medium">{p.totalReviews}</span>

            {/* Progress bar visual */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3">
              <div
                className="bg-blue-700 h-full rounded-full"
                style={{ width: `${(p.rating / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Review Cards Carousel/Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reviewsList.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  {rev.avatar ? (
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-900 text-amber-400 font-bold font-serif-title flex items-center justify-center border border-blue-800">
                      {rev.author.charAt(0)}
                    </div>
                  )}

                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{rev.author}</h4>
                    {rev.role && <p className="text-[10px] text-blue-700 font-semibold">{rev.role}</p>}
                  </div>
                </div>

                <span className="text-[10px] font-bold text-white bg-blue-900 px-2.5 py-0.5 rounded-full uppercase shadow-sm">
                  {rev.platform}
                </span>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>

              <p className="text-xs text-slate-700 leading-relaxed italic font-normal">
                "{rev.comment}"
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-500 flex justify-between font-medium">
              <span>Verified Customer</span>
              <span>{rev.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Write a Review Button */}
      <div className="text-center">
        <button
          onClick={() => setIsReviewModalOpen(true)}
          className="px-6 py-3 bg-white text-blue-900 font-bold text-xs rounded-xl border border-blue-200 hover:bg-blue-50 transition-colors inline-flex items-center gap-2 shadow-sm"
        >
          <MessageSquarePlus className="w-4 h-4 text-blue-700" />
          Share Your Dining Experience
        </button>
      </div>

      {/* Write Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full relative shadow-2xl text-slate-800">
            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-title font-bold text-2xl text-blue-900 mb-1">
              Write a Review
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Help fellow biryani lovers in Shadnagar know about your visit!
            </p>

            {submitSuccess ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-bold text-lg text-slate-900">Thank You for Your Feedback!</h4>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    placeholder="E.g., Ramesh Kumar"
                    className="w-full bg-slate-50 text-xs text-slate-900 p-2.5 rounded-lg border border-slate-200 focus:border-blue-600 outline-none mt-1"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase">Rating (1 to 5 Stars)</label>
                  <select
                    value={reviewForm.rating}
                    onChange={(e) => setReviewForm({ ...reviewForm, rating: Number(e.target.value) })}
                    className="w-full bg-slate-50 text-xs text-slate-900 p-2.5 rounded-lg border border-slate-200 focus:border-blue-600 outline-none mt-1"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 - Outstanding)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                    <option value={3}>⭐⭐⭐ (3 - Average)</option>
                    <option value={2}>⭐⭐ (2 - Below Average)</option>
                    <option value={1}>⭐ (1 - Poor)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase">Review Comment</label>
                  <textarea
                    rows={3}
                    required
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    placeholder="Tell us about the biryani taste, ambiance, or service..."
                    className="w-full bg-slate-50 text-xs text-slate-900 p-2.5 rounded-lg border border-slate-200 focus:border-blue-600 outline-none mt-1 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-900 text-white font-bold text-xs rounded-xl shadow-sm hover:bg-blue-800 transition-colors mt-2 border border-blue-800"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};

