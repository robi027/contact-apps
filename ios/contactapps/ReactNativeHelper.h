//
//  ReactNativeHelper.h
//  contactapps
//
//  Created by ROBI DWI SETIAWAN on 27/09/21.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge.h>
#import <React/RCTRootView.h>

#import "EventBusBridge.h"

@interface ReactNativeHelper : NSObject

+ (UINavigationController *)navigationController;
+ (void)createBridge;
+ (RCTRootView *)getRootViewWithModuleName:(NSString *)moduleName initialProperties:(NSDictionary *)initialProperties;
+ (void)lazyLoad:(NSString *)bundleName;
+ (EventBusBridge *)eventBus;
+ (RCTBridge *)sharedBridge;

@end
