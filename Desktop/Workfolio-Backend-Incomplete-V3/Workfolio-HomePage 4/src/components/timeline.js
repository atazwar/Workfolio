import React from 'react';
// import { withRouter } from "react-router";

import {
  StreamApp,
  StatusUpdateForm,
  FlatFeed,
  NotificationDropdown,
  Activity,
  LikeButton,
  CommentField,
  CommentList,
  CommentItem,
  InfiniteScrollPaginator,
} from 'react-activity-feed';
import 'react-activity-feed/dist/index.es.css';

const apiKey = 'vmfr5s86njmj';
const appId = '94414';
const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiSkdqZHlDbXRneFJFcFFmWGU1YXI1cXB2WkVXMiJ9.3CnhewhG4LZKkE1LCYl29vJrI3VeFUncFqKJ9gdCcKc"

const Timeline = () => {
  const containerRef = React.createRef();

    return (
      <div
        ref={containerRef}
        style={{
          maxWidth: '700px',
          // maxHeight: '500px',
          // overflow: 'scroll',
          margin: '0 auto',
        }}
      >
        <StreamApp apiKey={apiKey} appId={appId} token={token}>
          <div
            style={{
              background: '#fff', //#1A1A14
              height: 60,
              borderRadius: 4,
              margin: '10px 0',
              padding: '0 200px',
              boxShadow: '0px 0px 4px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <h3>My Workfolio Feed</h3>
            <NotificationDropdown arrow right />
          </div>
          <StatusUpdateForm
          // submitHandler={(e) => {
          //   alert(e);
          // }}
          />
          <FlatFeed
            feedGroup="user" // or timeline
            notify
            options={{
              limit: 6,
              // withOwnChildren: true,
              // withRecentReactions: true
            }}
            Paginator={(props) => (
              <InfiniteScrollPaginator
                useWindow={true}
                threshold={10}
                {...props}
                getScrollParent={() => containerRef}
              />
            )}
            Activity={(activityProps) => (
              <Activity
                {...activityProps}
                Footer={() => (
                  <React.Fragment>
                    <CommentField
                      activity={activityProps.activity}
                      onAddReaction={activityProps.onAddReaction}
                    />
                    <CommentList
                      activityId={activityProps.activity.id}
                      CommentItem={(props) => (
                        <React.Fragment>
                          <CommentItem {...props} />
                          <LikeButton
                            reaction={props.comment}
                            {...activityProps}
                          />
                        </React.Fragment>
                      )}
                    />
                  </React.Fragment>
                )}
              />
            )}
          />
        </StreamApp>
      </div>
    );
};

export default Timeline;
