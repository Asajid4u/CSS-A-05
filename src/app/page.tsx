import React from 'react';
import TripCard from './tripcard/tripcard';

export default function Page() {
  return (
    <div className="page-container">
      <h1>Trip Cards Demo</h1>
      
      {/* Example 1: TripCard with activities */}
      <TripCard 
        title="Sample Trip"
        description="A wonderful trip experience"
        activities={['Hiking', 'Swimming', 'Sightseeing']}
      />
      
      {/* Example 2: TripCard without activities (undefined) - This would have caused the error */}
      <TripCard 
        title="Planning Trip"
        description="Activities to be determined"
      />
      
      {/* Example 3: TripCard with empty activities array */}
      <TripCard 
        title="Another Trip"
        description="No activities yet"
        activities={[]}
      />
    </div>
  );
}
