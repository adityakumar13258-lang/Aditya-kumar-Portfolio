import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Clock, Video, Globe, ChevronLeft, ChevronRight, Calendar as CalendarIcon, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

// Mock Data for Calendar
const timeSlots = [
  "10:00am", "10:30am", "11:00am", "11:30am", 
  "12:00pm", "12:30pm", "1:00pm", "1:30pm", 
  "2:00pm", "3:00pm", "3:30pm", "4:00pm"
];

const BookingWidget = () => {
  const [step, setStep] = useState<'date' | 'form' | 'success'>('date');
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    goal: '',
    budget: '',
    painPoint: '',
  });

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setStep('form');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const monthName = currentMonth.toLocaleString('default', { month: 'long' });
    const year = currentMonth.getFullYear();
    const fullDate = `${monthName} ${selectedDate}, ${year}`;

    // Combine form data with selected date/time
    const payload = {
      ...formData,
      bookingDate: fullDate,
      bookingTime: selectedTime,
      subject: `New Booking Request: ${formData.name}`
    };

    try {
      // Use Environment Variable or fallback to default
      const endpoint = (import.meta as any).env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/xlgrvdln";
      
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStep('success');
      } else {
        alert("There was an issue submitting the form. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToWebsite = () => {
    window.location.href = '/';
  };

  // Calendar Logic (Simplified for demo)
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  const year = currentMonth.getFullYear();

  const renderCalendar = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = selectedDate === i;
      days.push(
        <button
          key={i}
          onClick={() => handleDateClick(i)}
          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-all
            ${isSelected 
              ? 'bg-amber-500 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)]' 
              : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
            }`}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  return (
    <Section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
          
          {/* LEFT SIDEBAR: Profile & Details */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-zinc-800 p-8 flex flex-col bg-zinc-900/30">
            <div className="mb-6">
               {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-zinc-700 overflow-hidden mb-4">
                 <img src="https://ui-avatars.com/api/?name=Aditya+Kumar&background=18181b&color=fff" alt="Aditya" />
              </div>
              <p className="text-zinc-500 font-medium text-sm mb-1">Aditya Kumar</p>
              <h2 className="text-2xl font-bold text-white mb-2">Intro call with Aditya</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Worked with 20+ founders and creators. Let's discuss your goals, audience, and how we can build a high-conversion website for you.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Clock size={18} />
                <span>15 min</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Video size={18} />
                <span>Google Meet</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Globe size={18} />
                <span>Asia/Kolkata</span>
              </div>
            </div>

            {/* Selected Date Summary */}
            {selectedDate && selectedTime && step === 'form' && (
              <div className="mt-auto bg-zinc-900 border border-amber-500/30 rounded-xl p-4">
                <div className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">Selected Time</div>
                <div className="text-white font-medium">
                  {monthName} {selectedDate}, {year}
                </div>
                <div className="text-zinc-400 text-sm">
                  {selectedTime}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="w-full md:w-2/3 bg-zinc-950 relative">
            
            {step === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center p-12 text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h3>
                <p className="text-zinc-400 max-w-md mb-8">
                  You will receive a Google Calendar invitation shortly at <span className="text-white">{formData.email}</span>.
                </p>
                <Button onClick={handleBackToWebsite} variant="outline">
                  Back to Website
                </Button>
              </div>
            ) : step === 'date' ? (
              // VIEW 1: CALENDAR & TIME
              <div className="h-full flex flex-col md:flex-row">
                
                {/* Calendar Grid */}
                <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-zinc-800">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-medium text-white">
                      {monthName} {year}
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 transition-colors">
                        <ChevronLeft size={18} />
                      </button>
                      <button className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 transition-colors">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-y-4 text-center mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                      <div key={day} className="text-xs font-medium text-zinc-500 uppercase">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-y-2 place-items-center">
                    {renderCalendar()}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="w-full md:w-64 p-6 overflow-y-auto max-h-[500px] md:max-h-none scrollbar-thin">
                  <h3 className="text-sm font-medium text-zinc-400 mb-4 sticky top-0 bg-zinc-950 pb-2">
                    {selectedDate ? `${monthName} ${selectedDate}` : 'Select a date'}
                  </h3>
                  
                  {selectedDate ? (
                    <div className="space-y-2 animate-fade-in-up">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          onClick={() => handleTimeClick(time)}
                          className="w-full py-3 px-4 rounded-lg border border-zinc-800 text-zinc-300 hover:border-amber-500 hover:text-amber-500 font-medium transition-all text-sm flex justify-between group"
                        >
                          {time}
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-zinc-600 text-sm">
                      <CalendarIcon size={32} className="mb-2 opacity-20" />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // VIEW 2: QUALIFICATION FORM
              <div className="h-full p-8 overflow-y-auto max-h-[700px] scrollbar-thin">
                <button 
                  onClick={() => setStep('date')}
                  className="flex items-center gap-2 text-zinc-500 hover:text-white mb-6 transition-colors text-sm"
                >
                  <ArrowLeft size={16} /> Back to Calendar
                </button>

                <h3 className="text-xl font-bold text-white mb-6">Enter Details</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Your Name *</label>
                      <input 
                        required
                        name="name"
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Email address *</label>
                      <input 
                        required
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Phone Number *</label>
                    <div className="flex">
                      <div className="bg-zinc-900 border border-zinc-800 border-r-0 rounded-l-lg px-3 py-3 text-zinc-400 text-sm flex items-center">
                        🇮🇳 +91
                      </div>
                      <input 
                        required
                        type="tel"
                        name="phone"
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="flex-1 bg-zinc-900 border border-zinc-800 rounded-r-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors disabled:opacity-50"
                        placeholder="98765 43210"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Current website / Social Link (Optional)</label>
                    <input 
                      name="website"
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors disabled:opacity-50"
                      placeholder="www.yourrestaurant.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">What are you trying to build? *</label>
                      <select 
                        required
                        name="goal"
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none disabled:opacity-50"
                      >
                         <option value="">Select...</option>
                         <option value="new">New Restaurant Website</option>
                         <option value="redesign">Redesign Existing Site</option>
                         <option value="funnel">Sales Funnel / Landing Page</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Investment Range *</label>
                      <select 
                        required
                        name="budget"
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none disabled:opacity-50"
                      >
                         <option value="">Select...</option>
                         <option value="low">₹10k - ₹30k</option>
                         <option value="mid">₹30k - ₹75k</option>
                         <option value="high">₹75k+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">What's the real pain-point holding you back? *</label>
                    <textarea 
                      required
                      name="painPoint"
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      rows={2}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none disabled:opacity-50"
                      placeholder="e.g. Not getting enough clients or poor positioning"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      fullWidth 
                      disabled={isSubmitting}
                      className="bg-white text-black hover:bg-zinc-200 shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                    </Button>
                  </div>
                  
                  <p className="text-xs text-center text-zinc-600">
                    By proceeding, you agree to our Terms and Privacy Policy.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BookingWidget;