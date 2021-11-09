//
//  EventBusBridge.h
//  contactapps
//
//  Created by ROBI DWI SETIAWAN on 27/09/21.
//

#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

typedef void (^SubscriptionBlock)(NSDictionary * _Nullable data);

@interface EventBusBridge : RCTEventEmitter <RCTBridgeModule>

- (void)subscribeToEvent:(NSString *)eventName block:(SubscriptionBlock)block;

@end
