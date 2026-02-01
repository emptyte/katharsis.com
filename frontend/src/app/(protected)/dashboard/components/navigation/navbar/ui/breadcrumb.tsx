'use client';

import { HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const isUUID = (segment: string) => {
  return /^[0-9a-fA-F-]{10,}$/.test(segment) || /^\d+$/.test(segment);
};

const formatSegment = (text: string) => {
  if (isUUID(text)) return text;

  return text.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};

function Breadcrumb() {
  const pathname = usePathname();

  const allSegments = pathname.split('/').filter(Boolean);

  const visibleSegments = allSegments.filter(
    (segment) => segment !== 'dashboard'
  );

  const pageTitle =
    visibleSegments.length === 0
      ? 'Overview'
      : formatSegment(visibleSegments[visibleSegments.length - 1]);

  return (
    <div className="flex flex-col gap-1 mb-6">
      {visibleSegments.length > 0 && (
        <nav
          className="
            flex flex-wrap items-center 
            text-sm text-theme-secondary-light/60
            max-w-full gap-2
          "
        >
          <Link
            href="/dashboard"
            className="flex items-center hover:text-theme-primary transition-colors"
            title="Go to Dashboard"
          >
            <HomeIcon className="h-4 w-4 shrink-0" />
          </Link>

          {visibleSegments.map((segment, index) => {
            const originalIndex = allSegments.indexOf(segment);
            const href =
              '/' + allSegments.slice(0, originalIndex + 1).join('/');

            const isFirst = index === 0;
            const isLast = index === visibleSegments.length - 1;
            const isStatic = isFirst || isLast;

            return (
              <React.Fragment key={href}>
                <span className="text-theme-secondary-light/30 select-none">
                  /
                </span>

                {isStatic ? (
                  <span
                    className={`
                      capitalize truncate max-w-[150px] select-none
                      ${
                        isLast
                          ? 'text-theme-secondary-light font-medium'
                          : 'text-theme-secondary-light/50'
                      }
                    `}
                  >
                    {formatSegment(segment)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="
                      capitalize truncate max-w-[150px] transition-colors
                      text-theme-secondary-light/70 
                      hover:text-theme-primary hover:underline underline-offset-4 decoration-theme-primary/30
                    "
                  >
                    {formatSegment(segment)}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      )}

      <h1 className="text-2xl font-special font-bold text-theme-main tracking-tight">
        {pageTitle}
      </h1>
    </div>
  );
}

export default Breadcrumb;
