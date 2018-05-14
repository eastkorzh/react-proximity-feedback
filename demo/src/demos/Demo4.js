import React from 'react';
import DemoContainer from './DemoContainer';
import ProximityFeedback from '../../../src/ProximityFeedback';

const code = `<ProximityFeedback>
  {({ ref, proximity }) => (
    <div style={{ border: '1px solid red', display: 'inline-block', padding: 35 }}>
      <button ref={ref} style={{ outline: \`3px solid rgba(255,0,0,\${proximity})\`}}>
        Come closer
      </button>
    </div>
  )}
</ProximityFeedback>
`;

export default function() {
  return (
    <DemoContainer
      heading="Demo 4: proximity"
      name="demo-proximity"
      description="Fourth example. Use proximity percentage."
      code={code}
    >
      <div>
        <ProximityFeedback>
          {({ ref, proximity }) => (
            <div
              style={{
                border: '1px solid red',
                display: 'inline-block',
                padding: 35
              }}
            >
              <button
                ref={ref}
                style={{
                  outline: `3px solid rgba(255,0,0,${proximity})`
                }}
              >
                Come closer
              </button>
            </div>
          )}
        </ProximityFeedback>
      </div>
    </DemoContainer>
  );
}
