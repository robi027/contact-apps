//
//  EventBusBridge.m
//  contactapps
//
//  Created by ROBI DWI SETIAWAN on 27/09/21.
//

#import "EventBusBridge.h"

@implementation EventBusBridge {
  NSArray *_supportedEventNames;
  NSMutableDictionary *_eventHandlers;
}

- (instancetype)init {
  self = [super init];
  
  if (self) {
    _supportedEventNames = @[@"onLoadComplete"];
    _eventHandlers = [NSMutableDictionary dictionary];
  }
  
  return self;
}

- (void)subscribeToEvent:(NSString *)eventName block:(SubscriptionBlock)block {
  _eventHandlers[eventName] = [block copy];
}

#pragma mark - React

RCT_EXPORT_MODULE(EventBusBridge);

- (NSArray<NSString *> *)supportedEvents {
  return _supportedEventNames;
}

#pragma mark - Event Handling

RCT_EXPORT_METHOD(sendEvent:(NSString *)eventName data:(NSDictionary *)data) {
  SubscriptionBlock block = _eventHandlers[eventName];
  if (block) {
    dispatch_async(dispatch_get_main_queue(), ^{
      block(data);
    });
  }
}

@end
