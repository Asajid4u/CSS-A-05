import React from 'react';

interface TripCardProps {
  activities?: string[];
  title?: string;
  description?: string;
}

export default function TripCard({ activities = [], title, description }: TripCardProps) {
  return (
    <div className="trip-card">
      <div className="trip-content">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        
        <h3 className="activities-heading">
          Activities
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {activities.length ? (
            activities.map((a, i) => (
              <span
                key={i}
                className="activity-tag"
              >
                {a}
              </span>
            ))
          ) : (
            <span className="no-activities">No activities available</span>
          )}
        </div>
      </div>
    </div>
  );
}
