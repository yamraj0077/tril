import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  description: string;
}

function MenuItem({ icon: Icon, label, description }: MenuItemProps) {
  return (
    <div className="relative group">
      <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">
        <Icon className="h-4 w-4 mr-2" />
        {label}
      </button>
      
      <div className="hidden group-hover:block absolute z-10 w-64 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="p-4">
          <div className="flex items-start">
            <Icon className="h-5 w-5 text-indigo-600 mt-1" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{label}</p>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;