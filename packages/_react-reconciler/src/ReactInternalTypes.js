/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


// Unwind Circular: moved from ReactFiberHooks.old




// A Fiber is work on a Component that needs to be done or was done. There can
// be more than one per component.


// The following attributes are only used by DevTools and are only present in DEV builds.
// They enable DevTools Profiler UI to show which Fiber(s) scheduled a given commit.


// The follow fields are only used by enableSuspenseCallback for hydration.


// The following fields are only used in transition tracing in Profile builds


// Exported FiberRoot type includes all properties,
// To avoid requiring potentially error-prone :any casts throughout the project.
// The types are defined separately within this file to ensure they stay in sync.



