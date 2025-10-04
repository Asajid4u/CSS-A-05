import React from 'react';
import TripCard from './tripcard/tripcard';

export default function Page() {
  return (
    <div className="page-container">
      <TripCard 
        title="Sample Trip"
        description="A wonderful trip experience"
        activities={['Hiking', 'Swimming', 'Sightseeing']}
      />
    </div>
  );
}
