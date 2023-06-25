import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export default function NotifAccAccord({ title, subtitle }) {
  const [isToggled, setIsToggled] = useState(false);

  const toggleButtonClasses = classNames(
    'flex items-center cursor-pointer',
    {
      'text-gray-700': !isToggled,
      'text-white': isToggled,
    }
  );

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (isToggled) {
      console.log(`Toggle for "${title}" is ON`);
    } else {
      console.log(`Toggle for "${title}" is OFF`);
    }
  }, [isToggled, title]);

  return (
    <div className="flex items-center py-4">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <h6 className="text-sm">{subtitle}</h6>
      </div>
      <div className="relative ml-auto">
        <label htmlFor={`toggleButton-${title}`} className={toggleButtonClasses}>
          <input
            id={`toggleButton-${title}`}
            type="checkbox"
            className="sr-only"
            checked={isToggled}
            onChange={handleToggle}
          />
          <div className="w-14 h-8 bg-gray-400 rounded-full"></div>
          <div
            className={classNames('dot absolute left-1 top-1 rounded-full transition', {
              'bg-gray-800 w-6 h-6 transform translate-x-0': !isToggled,
              'bg-green-700 w-6 h-6 transform translate-x-6': isToggled,
            })}
          ></div>
        </label>
      </div>
    </div>
  );
}
