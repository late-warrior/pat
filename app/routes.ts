import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix
} from "@react-router/dev/routes";

export default [
  // Dashboard as the index route
  index("dashboard/index.tsx"),
  
  // Promises routes
  ...prefix("promises", [
    index("promises/index.tsx"),
    // Individual promise route (to be implemented)
    // route(":id", "promises/$id.tsx"),
  ]),
  
  // Politicians routes
  ...prefix("politicians", [
    index("politicians/index.tsx"),
    // Individual politician route (to be implemented)
    // route(":id", "politicians/$id.tsx"),
  ]),
  
  // Parties routes
  ...prefix("parties", [
    index("parties/index.tsx"),
    // Individual party route (to be implemented)
    // route(":id", "parties/$id.tsx"),
  ]),
] satisfies RouteConfig;
