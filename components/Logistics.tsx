
import React, { useState } from 'react';

interface Shipment {
  id: string;
  route: string;
  status: string;
  time: string;
  pickup: string;
  destination: string;
  progress: number;
}

const Logistics: React.FC = () => {
  const [formData, setFormData] = useState({
    type: 'Heavy Duty Truck',
    capacity: '20 Tons',
    destination: '',
    pickup: '',
    date: ''
  });

  const [selectedTrackingId, setSelectedTrackingId] = useState<string | null>(null);

  const activeShipments: Shipment[] = [
    { 
      id: 'TRK-902', 
      route: 'Heartland → Port', 
      status: 'In-Transit', 
      time: '2h 15m left',
      pickup: 'Heartland Farm Gate A',
      destination: 'Central Port Terminal',
      progress: 65
    },
    { 
      id: 'TRK-441', 
      route: 'Valley Farm → Silo', 
      status: 'Pending', 
      time: 'Scheduled for 14:00',
      pickup: 'Valley Farm West',
      destination: 'Grain Silo #4',
      progress: 0
    },
  ];

  const selectedShipment = activeShipments.find(s => s.id === selectedTrackingId);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold text-slate-900">Agro-Logistics</h1>
          <p className="text-slate-500">Fast and reliable vehicle booking for your farm produce delivery.</p>
          
          <div className="bg-white p-8 rounded-3xl border shadow-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Vehicle Type</label>
                <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500">
                  <option>Heavy Duty Truck (20-40T)</option>
                  <option>Medium Delivery Truck (5-10T)</option>
                  <option>Light Pickup (1-2T)</option>
                  <option>Cold Chain Container</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Pickup Date</label>
                <input type="date" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Pickup Location</label>
                <input type="text" placeholder="e.g. Farm Gate A, Heartland" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Destination</label>
                <input type="text" placeholder="e.g. Central Silos, North Port" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors">
                  Request Quote & Book Truck
                </button>
              </div>
            </form>
          </div>

          <div className="bg-slate-100 p-6 rounded-2xl border border-dashed border-slate-300">
            <h4 className="font-bold text-slate-700 mb-2">🚚 Professional Logistics Guaranteed</h4>
            <p className="text-sm text-slate-500">All our vehicles are equipped with IoT tracking sensors. You can monitor the real-time location and temperature of your goods from the dashboard.</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800">Active Shipments</h3>
          <div className="space-y-4">
            {activeShipments.map((trk) => (
              <div key={trk.id} className="bg-white p-5 rounded-2xl border shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h5 className="font-bold text-slate-800">{trk.id}</h5>
                    <p className="text-xs text-slate-500">{trk.route}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                    trk.status === 'In-Transit' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {trk.status}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                  <span className="text-xs text-slate-400">{trk.time}</span>
                  <button 
                    onClick={() => setSelectedTrackingId(trk.id)}
                    className="text-green-600 text-xs font-bold hover:underline"
                  >
                    Track Map
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Overlay Modal */}
      {selectedShipment && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[80vh] animate-in zoom-in-95 duration-300">
            <div className="p-6 border-b flex justify-between items-center bg-white">
              <div>
                <h3 className="text-xl font-bold text-slate-800">Live Tracking: {selectedShipment.id}</h3>
                <p className="text-sm text-slate-500">Vehicle Type: Heavy Duty Truck • Capacity: 20T</p>
              </div>
              <button 
                onClick={() => setSelectedTrackingId(null)}
                className="bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="flex-1 bg-slate-100 relative overflow-hidden flex items-center justify-center">
              {/* Placeholder Map SVG / Visual */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative w-[80%] h-12 bg-slate-200 rounded-full shadow-inner flex items-center px-4">
                {/* Route Line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-slate-300 w-full rounded-full"></div>
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-green-500 rounded-full transition-all duration-1000"
                  style={{ width: `${selectedShipment.progress}%` }}
                ></div>

                {/* Pickup Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 bg-white border-2 border-slate-400 rounded-full shadow-sm"></div>
                  <span className="absolute top-6 whitespace-nowrap text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Pickup</span>
                </div>

                {/* Truck Pulse Marker */}
                <div 
                  className="absolute z-20 flex flex-col items-center transition-all duration-1000"
                  style={{ left: `${selectedShipment.progress}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-8 h-8 bg-green-600 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs">🚚</span>
                    </div>
                  </div>
                  <span className="absolute -top-10 bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap font-bold">
                    Currently In {selectedShipment.progress > 50 ? 'North Sector' : 'East Valley'}
                  </span>
                </div>

                {/* Destination Marker */}
                <div className="absolute right-4 flex flex-col items-center">
                  <div className="w-6 h-6 bg-white border-2 border-green-600 rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="absolute top-8 whitespace-nowrap text-[10px] font-bold text-green-700 uppercase tracking-tighter">Destination</span>
                </div>
              </div>

              {/* Status Info Card on Map */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row gap-4">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex-1 border border-white/50">
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Origin</p>
                  <p className="text-sm font-bold text-slate-800">{selectedShipment.pickup}</p>
                </div>
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex-1 border border-white/50">
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Destination</p>
                  <p className="text-sm font-bold text-slate-800">{selectedShipment.destination}</p>
                </div>
                <div className="bg-green-600 p-4 rounded-2xl shadow-xl flex-1 text-white">
                  <p className="text-[10px] opacity-80 uppercase font-bold mb-1">Est. Arrival</p>
                  <p className="text-sm font-bold">{selectedShipment.time}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white flex items-center justify-between border-t">
               <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-xl">👤</div>
                 <div>
                   <p className="text-xs text-slate-500 font-medium">Driver Contact</p>
                   <p className="text-sm font-bold text-slate-800">Samuel Rivera • +1 (555) 012-3456</p>
                 </div>
               </div>
               <button className="bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors">
                 Call Driver
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logistics;
