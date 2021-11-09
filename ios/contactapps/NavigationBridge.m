//
//  NavigationBridge.m
//  contactapps
//
//  Created by ROBI DWI SETIAWAN on 27/09/21.
//

#import <UIKit/UIKit.h>

#import "NavigationBridge.h"
#import "ReactNativeHelper.h"
#import "ReactNativeViewController.h"

@implementation NavigationBridge

RCT_EXPORT_MODULE(NavigationBridge);

/**
 * We are doing navigation operations, so make sure they are all on the UI Thread.
 * Or you can wrap specific methods that require the main queue like this:
 *
 * dispatch_async(dispatch_get_main_queue(), ^{
 *   // method implementation
 * });
 */
- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(push:(NSString *)screenName) {
  NSLog(@"RCT_EXPORT_METHOD = %@", screenName);
  ReactNativeViewController *newVc = [[ReactNativeViewController alloc] initWithScreenName:screenName];
  [[ReactNativeHelper navigationController] showViewController:newVc sender:self];
}

@end
