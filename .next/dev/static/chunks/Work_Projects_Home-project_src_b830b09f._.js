(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Work/Projects/Home-project/src/components/AuthContext/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthContext",
    ()=>AuthContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    auth: false,
    user: {}
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/redux/services/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "useAddReviewMutation",
    ()=>useAddReviewMutation,
    "useGetCurrentUserQuery",
    ()=>useGetCurrentUserQuery,
    "useGetDishesByRestaurantIdQuery",
    ()=>useGetDishesByRestaurantIdQuery,
    "useGetRestaurantsQuery",
    ()=>useGetRestaurantsQuery,
    "useGetReviewsByRestaurantIdQuery",
    ()=>useGetReviewsByRestaurantIdQuery,
    "useGetUsersQuery",
    ()=>useGetUsersQuery,
    "useLazyGetCurrentUserQuery",
    ()=>useLazyGetCurrentUserQuery,
    "useLazyGetRestaurantsQuery",
    ()=>useLazyGetRestaurantsQuery,
    "useLoginMutation",
    ()=>useLoginMutation,
    "useRegisterMutation",
    ()=>useRegisterMutation,
    "useUpdateReviewMutation",
    ()=>useUpdateReviewMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
const getApiUrl = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            return "TURBOPACK compile-time value", "https://restaurants-api-rbvf.onrender.com/api";
        }
        //TURBOPACK unreachable
        ;
    }
    //TURBOPACK unreachable
    ;
};
const baseQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
    baseUrl: getApiUrl(),
    prepareHeaders: (headers)=>{
        const token = localStorage.getItem('authToken');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
});
const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'api',
    baseQuery,
    tagTypes: [
        'reviews'
    ],
    endpoints: (builder)=>({
            getRestaurants: builder.query({
                query: ()=>'/restaurants'
            }),
            getUsers: builder.query({
                query: ()=>'/users'
            }),
            getReviewsByRestaurantId: builder.query({
                query: (restaurantId)=>`/reviews?restaurantId=${restaurantId}`,
                providesTags: [
                    {
                        type: 'reviews',
                        id: 'all'
                    }
                ]
            }),
            addReview: builder.mutation({
                query: ({ restaurantId, review })=>({
                        url: `/review/${restaurantId}`,
                        body: review,
                        method: 'POST'
                    }),
                invalidatesTags: [
                    {
                        type: 'reviews',
                        id: 'all'
                    }
                ]
            }),
            updateReview: builder.mutation({
                query: ({ reviewId, review })=>({
                        url: `/review/${reviewId}`,
                        body: review,
                        method: 'PATCH'
                    }),
                invalidatesTags: [
                    {
                        type: 'reviews',
                        id: 'all'
                    }
                ]
            }),
            getDishesByRestaurantId: builder.query({
                query: (restaurantId)=>`/dishes?restaurantId=${restaurantId}`
            }),
            register: builder.mutation({
                query: (credentials)=>({
                        url: '/auth/register',
                        method: 'POST',
                        body: credentials
                    })
            }),
            login: builder.mutation({
                query: (credentials)=>({
                        url: '/auth/login',
                        method: 'POST',
                        body: credentials
                    })
            }),
            getCurrentUser: builder.query({
                query: ()=>'/auth/me'
            })
        })
});
const { useGetRestaurantsQuery, useLazyGetRestaurantsQuery, useGetUsersQuery, useGetReviewsByRestaurantIdQuery, useAddReviewMutation, useUpdateReviewMutation, useGetDishesByRestaurantIdQuery, useRegisterMutation, useLoginMutation, useGetCurrentUserQuery, useLazyGetCurrentUserQuery } = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/AuthContext/use-auth.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/services/api.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const DEFAULT_AUTH_STATE = {
    auth: false,
    user: {}
};
const LOGIN_ACTION = 'LOGIN_ACTION';
const LOGOUT_ACTION = 'LOGOUT_ACTION';
const SET_LOADING_ACTION = 'SET_LOADING_ACTION';
const reducer = (state, { type, payload })=>{
    switch(type){
        case LOGIN_ACTION:
            return {
                auth: true,
                user: payload,
                isLoading: false
            };
        case LOGOUT_ACTION:
            return {
                auth: false,
                user: {},
                isLoading: false
            };
        case SET_LOADING_ACTION:
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
};
const useAuth = ()=>{
    _s();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(reducer, {
        ...DEFAULT_AUTH_STATE,
        isLoading: true
    });
    const [loginMutation, { isLoading: isLoginLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoginMutation"])();
    const [registerMutation, { isLoading: isRegisterLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegisterMutation"])();
    const [getCurrentUser, { isLoading: isGetUserLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyGetCurrentUserQuery"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            const checkAuth = {
                "useAuth.useEffect.checkAuth": async ()=>{
                    const token = localStorage.getItem('authToken');
                    if (token) {
                        try {
                            const response = await getCurrentUser().unwrap();
                            if (response.user) {
                                dispatch({
                                    type: LOGIN_ACTION,
                                    payload: response.user
                                });
                            } else {
                                localStorage.removeItem('authToken');
                                dispatch({
                                    type: SET_LOADING_ACTION,
                                    payload: false
                                });
                            }
                        } catch (error) {
                            console.error('Error checking auth:', error);
                            localStorage.removeItem('authToken');
                            dispatch({
                                type: SET_LOADING_ACTION,
                                payload: false
                            });
                        }
                    } else {
                        dispatch({
                            type: SET_LOADING_ACTION,
                            payload: false
                        });
                    }
                }
            }["useAuth.useEffect.checkAuth"];
            checkAuth();
        }
    }["useAuth.useEffect"], [
        getCurrentUser
    ]);
    const login = async (email, password)=>{
        try {
            const response = await loginMutation({
                email,
                password
            }).unwrap();
            localStorage.setItem('authToken', response.token);
            dispatch({
                type: LOGIN_ACTION,
                payload: response.user
            });
            return {
                success: true
            };
        } catch (error) {
            return {
                success: false,
                error: error.data?.error || 'Login failed'
            };
        }
    };
    const register = async (email, password, name)=>{
        try {
            const response = await registerMutation({
                email,
                password,
                name
            }).unwrap();
            localStorage.setItem('authToken', response.token);
            dispatch({
                type: LOGIN_ACTION,
                payload: response.user
            });
            return {
                success: true
            };
        } catch (error) {
            return {
                success: false,
                error: error.data?.error || 'Registration failed'
            };
        }
    };
    const logout = ()=>{
        localStorage.removeItem('authToken');
        dispatch({
            type: LOGOUT_ACTION
        });
    };
    return {
        state: {
            ...state,
            isLoading: state.isLoading || isLoginLoading || isRegisterLoading || isGetUserLoading
        },
        login,
        register,
        logout
    };
};
_s(useAuth, "39YV6BHGAm+mG2Xt5UjBYFKYoko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoginMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegisterMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyGetCurrentUserQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/AuthContext/auth-context.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthContext",
    ()=>AuthContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$AuthContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/AuthContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$AuthContext$2f$use$2d$auth$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/AuthContext/use-auth.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AuthContext = ({ children })=>{
    _s();
    const { state, login, register, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$AuthContext$2f$use$2d$auth$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { auth, user, isLoading } = state;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$AuthContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"], {
        value: {
            auth,
            user,
            login,
            register,
            logout,
            isLoading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/AuthContext/auth-context.jsx",
        lineNumber: 14,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthContext, "/wC3uTl9SoXgeGbB10PoqZSDz0w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$AuthContext$2f$use$2d$auth$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AuthContext;
var _c;
__turbopack_context__.k.register(_c, "AuthContext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/ThemeContext/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>ThemeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: "light"
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/ThemeContext/theme-context.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>ThemeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ThemeContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/ThemeContext/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ThemeContext = ({ children })=>{
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeContext.useEffect": ()=>{
            document.documentElement.setAttribute('data-theme', theme);
        }
    }["ThemeContext.useEffect"], [
        theme
    ]);
    const toggleTheme = ()=>{
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ThemeContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"], {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/ThemeContext/theme-context.jsx",
        lineNumber: 19,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeContext, "lm84LOZxHN0YC4jzvAwAP/18Sno=");
_c = ThemeContext;
var _c;
__turbopack_context__.k.register(_c, "ThemeContext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/Header/header.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "fixer": "header-module-scss-module__1QUgba__fixer",
  "nav": "header-module-scss-module__1QUgba__nav",
  "right": "header-module-scss-module__1QUgba__right",
  "wrapper": "header-module-scss-module__1QUgba__wrapper",
});
}),
"[project]/Work/Projects/Home-project/src/components/Button/button.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "button-module-scss-module__8HmYJG__button",
  "dark": "button-module-scss-module__8HmYJG__dark",
  "light": "button-module-scss-module__8HmYJG__light",
});
}),
"[project]/Work/Projects/Home-project/src/components/Button/button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Button/button.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ThemeContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/ThemeContext/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Button = ({ children, onClick, type = 'button', disabled = false, className })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ThemeContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, className, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light]: theme === 'light',
            [__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dark]: theme === 'dark'
        }),
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/Button/button.jsx",
        lineNumber: 17,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Button, "LidUGjXGvl6nqLnPI8yC77ot4bM=");
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/ToggleTheme/toggle-theme.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToggleTheme",
    ()=>ToggleTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Button/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ThemeContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/ThemeContext/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ToggleTheme = ()=>{
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ThemeContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: toggleTheme,
        children: theme
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/ToggleTheme/toggle-theme.jsx",
        lineNumber: 9,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ToggleTheme, "EFRZgBTSn7R64yv9sbxwgPkwfJQ=");
_c = ToggleTheme;
var _c;
__turbopack_context__.k.register(_c, "ToggleTheme");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/CartTotal/cart-total.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "amount": "cart-total-module-scss-module__JAHKva__amount",
  "icon": "cart-total-module-scss-module__JAHKva__icon",
  "wrapper": "cart-total-module-scss-module__JAHKva__wrapper",
});
}),
"[project]/Work/Projects/Home-project/src/redux/entities/cart/slice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "cartSlice",
    ()=>cartSlice,
    "removeFromCart",
    ()=>removeFromCart,
    "selectAmountByRestaurantId",
    ()=>selectAmountByRestaurantId,
    "selectCartItemsIds",
    ()=>selectCartItemsIds,
    "selectTotalItemsInCart",
    ()=>selectTotalItemsInCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const cartSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'cart',
    initialState: {},
    reducers: {
        addToCart: (state, { payload })=>{
            state[payload] = (state[payload] || 0) + 1;
        },
        removeFromCart: (state, { payload })=>{
            if (!state[payload]) {
                return state;
            }
            state[payload] = state[payload] - 1;
            if (state[payload] <= 0) {
                delete state[payload];
            }
        }
    },
    selectors: {
        selectAmountByRestaurantId: (state, id)=>state[id]
    }
});
const { selectAmountByRestaurantId } = cartSlice.selectors;
const { addToCart, removeFromCart } = cartSlice.actions;
const selectCartSlice = (state)=>state.cart;
const selectCartItemsIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])([
    selectCartSlice
], (cart)=>Object.keys(cart));
const selectTotalItemsInCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])([
    selectCartSlice
], (cart)=>Object.values(cart).reduce((total, quantity)=>total + quantity, 0));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/hooks/use-counter.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCounter",
    ()=>useCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/cart/slice.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useCounter = (id)=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const counterValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "useCounter.useSelector": (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAmountByRestaurantId"])(state, id)
    }["useCounter.useSelector"]) || 0;
    const incrementCounter = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"])(id)), [
            dispatch,
            id
        ];
    };
    const decrementCounter = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromCart"])(id)), [
            dispatch,
            id
        ];
    };
    return {
        counterValue,
        incrementCounter,
        decrementCounter
    };
};
_s(useCounter, "HHF1nSYu29LFRF2DQMTWH8IFW6M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/Counter/counter.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "counter": "counter-module-scss-module__easoYq__counter",
});
}),
"[project]/Work/Projects/Home-project/src/components/Counter/counter.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Counter",
    ()=>Counter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Counter$2f$counter$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Counter/counter.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Button/button.jsx [app-client] (ecmascript)");
;
;
;
;
const Counter = ({ value, increment, decrement })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Counter$2f$counter$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].counter,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: decrement,
                children: "-"
            }, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/Counter/counter.jsx",
                lineNumber: 10,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: value
            }, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/Counter/counter.jsx",
                lineNumber: 11,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: increment,
                children: "+"
            }, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/Counter/counter.jsx",
                lineNumber: 12,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Work/Projects/Home-project/src/components/Counter/counter.jsx",
        lineNumber: 9,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Counter;
var _c;
__turbopack_context__.k.register(_c, "Counter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/DishCounter/dish-counter.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DishCounter",
    ()=>DishCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$hooks$2f$use$2d$counter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/hooks/use-counter.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Counter$2f$counter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Counter/counter.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const DishCounter = ({ id })=>{
    _s();
    const { counterValue, incrementCounter, decrementCounter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$hooks$2f$use$2d$counter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCounter"])(id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Counter$2f$counter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Counter"], {
        value: counterValue,
        increment: incrementCounter,
        decrement: decrementCounter
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/DishCounter/dish-counter.jsx",
        lineNumber: 9,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DishCounter, "wCVIZtLjK72iBdFHKes9/pXIHUY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$hooks$2f$use$2d$counter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCounter"]
    ];
});
_c = DishCounter;
var _c;
__turbopack_context__.k.register(_c, "DishCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/BaseLink/base-link.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "link": "base-link-module-scss-module__AgyvdW__link",
});
}),
"[project]/Work/Projects/Home-project/src/components/BaseLink/base-link.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseLink",
    ()=>BaseLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$BaseLink$2f$base$2d$link$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/BaseLink/base-link.module.scss [app-client] (css module)");
'use client';
;
;
;
;
const BaseLink = ({ children, to, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: to,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$BaseLink$2f$base$2d$link$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/BaseLink/base-link.jsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BaseLink;
var _c;
__turbopack_context__.k.register(_c, "BaseLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/CartItem/cart-item.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "amount": "cart-item-module-scss-module__JyqHma__amount",
  "controls": "cart-item-module-scss-module__JyqHma__controls",
  "header": "cart-item-module-scss-module__JyqHma__header",
  "item": "cart-item-module-scss-module__JyqHma__item",
  "name": "cart-item-module-scss-module__JyqHma__name",
});
}),
"[project]/Work/Projects/Home-project/src/components/CartItem/cart-item.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartItem",
    ()=>CartItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$DishCounter$2f$dish$2d$counter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/DishCounter/dish-counter.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$BaseLink$2f$base$2d$link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/BaseLink/base-link.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartItem$2f$cart$2d$item$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/CartItem/cart-item.module.scss [app-client] (css module)");
;
;
;
;
;
const CartItem = ({ id, amount, name })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartItem$2f$cart$2d$item$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartItem$2f$cart$2d$item$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$BaseLink$2f$base$2d$link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseLink"], {
                        to: `/dish/${id}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartItem$2f$cart$2d$item$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/Work/Projects/Home-project/src/components/CartItem/cart-item.jsx",
                        lineNumber: 10,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartItem$2f$cart$2d$item$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].amount,
                        children: [
                            "× ",
                            amount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/Projects/Home-project/src/components/CartItem/cart-item.jsx",
                        lineNumber: 13,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Work/Projects/Home-project/src/components/CartItem/cart-item.jsx",
                lineNumber: 9,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartItem$2f$cart$2d$item$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$DishCounter$2f$dish$2d$counter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DishCounter"], {
                    id: id
                }, void 0, false, {
                    fileName: "[project]/Work/Projects/Home-project/src/components/CartItem/cart-item.jsx",
                    lineNumber: 16,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/CartItem/cart-item.jsx",
                lineNumber: 15,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Work/Projects/Home-project/src/components/CartItem/cart-item.jsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CartItem;
var _c;
__turbopack_context__.k.register(_c, "CartItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/CartItem/cart-item-container.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartItemContainer",
    ()=>CartItemContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartItem$2f$cart$2d$item$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/CartItem/cart-item.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/cart/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/services/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const CartItemContainer = ({ id })=>{
    _s();
    const amount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "CartItemContainer.useSelector[amount]": (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAmountByRestaurantId"])(state, id)
    }["CartItemContainer.useSelector[amount]"]);
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetDishesByRestaurantIdQuery"])(undefined, {
        selectFromResult: {
            "CartItemContainer.useGetDishesByRestaurantIdQuery": (result)=>({
                    ...result,
                    data: result.data?.find({
                        "CartItemContainer.useGetDishesByRestaurantIdQuery": ({ id: dishId })=>dishId === id
                    }["CartItemContainer.useGetDishesByRestaurantIdQuery"])
                })
        }["CartItemContainer.useGetDishesByRestaurantIdQuery"]
    });
    if (!data) {
        return;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartItem$2f$cart$2d$item$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartItem"], {
        id: id,
        amount: amount,
        name: data.name
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/CartItem/cart-item-container.jsx",
        lineNumber: 22,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CartItemContainer, "axd2o3ZQyfykgQUgokkA3bDPvlM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetDishesByRestaurantIdQuery"]
    ];
});
_c = CartItemContainer;
var _c;
__turbopack_context__.k.register(_c, "CartItemContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/Cart/cart.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "list": "cart-module-scss-module__w6Lvga__list",
});
}),
"[project]/Work/Projects/Home-project/src/components/Cart/cart.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cart",
    ()=>Cart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartItem$2f$cart$2d$item$2d$container$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/CartItem/cart-item-container.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Cart$2f$cart$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Cart/cart.module.scss [app-client] (css module)");
;
;
;
;
const Cart = ({ itemsIds })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Cart$2f$cart$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
        children: itemsIds.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartItem$2f$cart$2d$item$2d$container$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartItemContainer"], {
                    id: id
                }, void 0, false, {
                    fileName: "[project]/Work/Projects/Home-project/src/components/Cart/cart.jsx",
                    lineNumber: 10,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0))
            }, id, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/Cart/cart.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/Cart/cart.jsx",
        lineNumber: 7,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Cart;
var _c;
__turbopack_context__.k.register(_c, "Cart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeButton": "cart-modal-module-scss-module__gY4THW__closeButton",
  "content": "cart-modal-module-scss-module__gY4THW__content",
  "empty": "cart-modal-module-scss-module__gY4THW__empty",
  "fadeIn": "cart-modal-module-scss-module__gY4THW__fadeIn",
  "header": "cart-modal-module-scss-module__gY4THW__header",
  "modal": "cart-modal-module-scss-module__gY4THW__modal",
  "overlay": "cart-modal-module-scss-module__gY4THW__overlay",
  "slideIn": "cart-modal-module-scss-module__gY4THW__slideIn",
  "title": "cart-modal-module-scss-module__gY4THW__title",
});
}),
"[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartModal",
    ()=>CartModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Cart$2f$cart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Cart/cart.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/cart/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$cart$2d$modal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const CartModal = ({ isOpen, onClose })=>{
    _s();
    const itemsIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectCartItemsIds"]);
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartModal.useEffect": ()=>{
            const handleClickOutside = {
                "CartModal.useEffect.handleClickOutside": (event)=>{
                    if (modalRef.current && !modalRef.current.contains(event.target)) {
                        onClose();
                    }
                }
            }["CartModal.useEffect.handleClickOutside"];
            if (isOpen) {
                document.addEventListener('mousedown', handleClickOutside);
                document.body.style.overflow = 'hidden';
            }
            return ({
                "CartModal.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                    document.body.style.overflow = 'unset';
                }
            })["CartModal.useEffect"];
        }
    }["CartModal.useEffect"], [
        isOpen,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartModal.useEffect": ()=>{
            const handleEscape = {
                "CartModal.useEffect.handleEscape": (event)=>{
                    if (event.key === 'Escape') {
                        onClose();
                    }
                }
            }["CartModal.useEffect.handleEscape"];
            if (isOpen) {
                document.addEventListener('keydown', handleEscape);
            }
            return ({
                "CartModal.useEffect": ()=>{
                    document.removeEventListener('keydown', handleEscape);
                }
            })["CartModal.useEffect"];
        }
    }["CartModal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$cart$2d$modal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay
            }, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx",
                lineNumber: 51,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$cart$2d$modal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                ref: modalRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$cart$2d$modal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$cart$2d$modal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "Корзина"
                            }, void 0, false, {
                                fileName: "[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx",
                                lineNumber: 54,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$cart$2d$modal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                                onClick: onClose,
                                "aria-label": "Закрыть",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18 6L6 18M6 6L18 18",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx",
                                        lineNumber: 57,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx",
                                    lineNumber: 56,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx",
                                lineNumber: 55,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$cart$2d$modal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: itemsIds.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$cart$2d$modal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Корзина пуста"
                            }, void 0, false, {
                                fileName: "[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx",
                                lineNumber: 64,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx",
                            lineNumber: 63,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Cart$2f$cart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cart"], {
                            itemsIds: itemsIds
                        }, void 0, false, {
                            fileName: "[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx",
                            lineNumber: 67,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx",
                lineNumber: 52,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CartModal, "pYPe+SRr2InyOwIWF7BHxizDefk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = CartModal;
var _c;
__turbopack_context__.k.register(_c, "CartModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/CartModal/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$cart$2d$modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/CartTotal/cart-total.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartTotal",
    ()=>CartTotal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartTotal$2f$cart$2d$total$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/CartTotal/cart-total.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/cart/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/CartModal/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$cart$2d$modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/CartModal/cart-modal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const CartTotal = ()=>{
    _s();
    const total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTotalItemsInCart"]);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCartClick = ()=>{
        setIsModalOpen(true);
    };
    const handleCloseModal = ()=>{
        setIsModalOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartTotal$2f$cart$2d$total$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
                onClick: handleCartClick,
                style: {
                    cursor: 'pointer'
                },
                children: [
                    total > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartTotal$2f$cart$2d$total$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].amount,
                        children: total
                    }, void 0, false, {
                        fileName: "[project]/Work/Projects/Home-project/src/components/CartTotal/cart-total.jsx",
                        lineNumber: 24,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartTotal$2f$cart$2d$total$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                        src: "/cart.svg",
                        alt: "cart"
                    }, void 0, false, {
                        fileName: "[project]/Work/Projects/Home-project/src/components/CartTotal/cart-total.jsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Work/Projects/Home-project/src/components/CartTotal/cart-total.jsx",
                lineNumber: 23,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartModal$2f$cart$2d$modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartModal"], {
                isOpen: isModalOpen,
                onClose: handleCloseModal
            }, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/CartTotal/cart-total.jsx",
                lineNumber: 27,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CartTotal, "vp98fzMCIuK+xqh+oeqmVKiLNew=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = CartTotal;
var _c;
__turbopack_context__.k.register(_c, "CartTotal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/CartTotal/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartTotal$2f$cart$2d$total$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/CartTotal/cart-total.jsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/HeaderAuth/header-auth.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "header-auth-module-scss-module__zp3afW__button",
  "dark": "header-auth-module-scss-module__zp3afW__dark",
  "light": "header-auth-module-scss-module__zp3afW__light",
  "userName": "header-auth-module-scss-module__zp3afW__userName",
});
}),
"[project]/Work/Projects/Home-project/src/components/HeaderAuth/header-auth.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderAuth",
    ()=>HeaderAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$AuthContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/AuthContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ThemeContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/ThemeContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Button/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartTotal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/CartTotal/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartTotal$2f$cart$2d$total$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/CartTotal/cart-total.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$BaseLink$2f$base$2d$link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/BaseLink/base-link.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$HeaderAuth$2f$header$2d$auth$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/HeaderAuth/header-auth.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const HeaderAuth = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { auth, user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$AuthContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"]);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ThemeContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    const handleLogout = ()=>{
        logout();
        router.push('/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: auth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleLogout,
                    children: "Выйти"
                }, void 0, false, {
                    fileName: "[project]/Work/Projects/Home-project/src/components/HeaderAuth/header-auth.jsx",
                    lineNumber: 25,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$HeaderAuth$2f$header$2d$auth$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName, {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$HeaderAuth$2f$header$2d$auth$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light]: theme === 'light',
                        [__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$HeaderAuth$2f$header$2d$auth$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dark]: theme === 'dark'
                    }),
                    children: user.name
                }, void 0, false, {
                    fileName: "[project]/Work/Projects/Home-project/src/components/HeaderAuth/header-auth.jsx",
                    lineNumber: 26,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$CartTotal$2f$cart$2d$total$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartTotal"], {}, void 0, false, {
                    fileName: "[project]/Work/Projects/Home-project/src/components/HeaderAuth/header-auth.jsx",
                    lineNumber: 32,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$BaseLink$2f$base$2d$link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseLink"], {
            to: "/auth/login",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                children: "Войти"
            }, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/HeaderAuth/header-auth.jsx",
                lineNumber: 36,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Work/Projects/Home-project/src/components/HeaderAuth/header-auth.jsx",
            lineNumber: 35,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(HeaderAuth, "z0oq+fBaR9PROqR9E9VtDHaAHfY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HeaderAuth;
var _c;
__turbopack_context__.k.register(_c, "HeaderAuth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/HeaderAuth/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$HeaderAuth$2f$header$2d$auth$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/HeaderAuth/header-auth.jsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/Header/header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Header/header.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ToggleTheme$2f$toggle$2d$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/ToggleTheme/toggle-theme.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$HeaderAuth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/HeaderAuth/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$HeaderAuth$2f$header$2d$auth$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/HeaderAuth/header-auth.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$BaseLink$2f$base$2d$link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/BaseLink/base-link.jsx [app-client] (ecmascript)");
;
;
;
;
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fixer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
                    children: [
                        "Header",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$BaseLink$2f$base$2d$link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseLink"], {
                                    to: "/",
                                    children: "Главная"
                                }, void 0, false, {
                                    fileName: "[project]/Work/Projects/Home-project/src/components/Header/header.jsx",
                                    lineNumber: 15,
                                    columnNumber: 22
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$BaseLink$2f$base$2d$link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseLink"], {
                                    to: "/restaurants",
                                    children: "Рестораны"
                                }, void 0, false, {
                                    fileName: "[project]/Work/Projects/Home-project/src/components/Header/header.jsx",
                                    lineNumber: 16,
                                    columnNumber: 22
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Work/Projects/Home-project/src/components/Header/header.jsx",
                            lineNumber: 14,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ToggleTheme$2f$toggle$2d$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleTheme"], {}, void 0, false, {
                                    fileName: "[project]/Work/Projects/Home-project/src/components/Header/header.jsx",
                                    lineNumber: 19,
                                    columnNumber: 22
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$HeaderAuth$2f$header$2d$auth$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderAuth"], {}, void 0, false, {
                                    fileName: "[project]/Work/Projects/Home-project/src/components/Header/header.jsx",
                                    lineNumber: 20,
                                    columnNumber: 22
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Work/Projects/Home-project/src/components/Header/header.jsx",
                            lineNumber: 18,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/Projects/Home-project/src/components/Header/header.jsx",
                    lineNumber: 12,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/Header/header.jsx",
                lineNumber: 11,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Work/Projects/Home-project/src/components/Header/header.jsx",
            lineNumber: 10,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/Header/header.jsx",
        lineNumber: 9,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/Header/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Header$2f$header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Header/header.jsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/Footer/footer.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "footerWrapper": "footer-module-scss-module__RWpNTa__footerWrapper",
});
}),
"[project]/Work/Projects/Home-project/src/components/Footer/footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Footer$2f$footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Footer/footer.module.scss [app-client] (css module)");
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Footer$2f$footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerWrapper,
                children: "Footer"
            }, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/Footer/footer.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Work/Projects/Home-project/src/components/Footer/footer.jsx",
            lineNumber: 7,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/Footer/footer.jsx",
        lineNumber: 6,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/Footer/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Footer$2f$footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Footer/footer.jsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/hooks/use-progressbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProgressBar",
    ()=>useProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useProgressBar = ()=>{
    _s();
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrollPercent, setScrollPercent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProgressBar.useEffect": ()=>{
            const handleScroll = {
                "useProgressBar.useEffect.handleScroll": ()=>{
                    const scrollTop = window.scrollY;
                    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const percent = scrollTop / scrollHeight * 100;
                    setScrollPercent(percent);
                }
            }["useProgressBar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "useProgressBar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["useProgressBar.useEffect"];
        }
    }["useProgressBar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProgressBar.useEffect": ()=>{
            if (progressRef.current) {
                progressRef.current.style.width = `${scrollPercent}%`;
            }
        }
    }["useProgressBar.useEffect"], [
        scrollPercent
    ]);
    return {
        progressRef
    };
};
_s(useProgressBar, "kH2h283EjjklzRH9Ff/nk3ZVu0w=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/ProgressBar/progress-bar.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "progressbar": "progress-bar-module-scss-module__xehEJa__progressbar",
  "progressbar__inner": "progress-bar-module-scss-module__xehEJa__progressbar__inner",
});
}),
"[project]/Work/Projects/Home-project/src/components/ProgressBar/progress-bar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgressBar",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$hooks$2f$use$2d$progressbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/hooks/use-progressbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ProgressBar$2f$progress$2d$bar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/ProgressBar/progress-bar.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ProgressBar = ()=>{
    _s();
    const { progressRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$hooks$2f$use$2d$progressbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressBar"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ProgressBar$2f$progress$2d$bar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressbar,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: progressRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ProgressBar$2f$progress$2d$bar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressbar__inner
        }, void 0, false, {
            fileName: "[project]/Work/Projects/Home-project/src/components/ProgressBar/progress-bar.jsx",
            lineNumber: 11,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/ProgressBar/progress-bar.jsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProgressBar, "Gp86L4r4s6Tq1RMCbpe3y59pQGk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$hooks$2f$use$2d$progressbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressBar"]
    ];
});
_c = ProgressBar;
var _c;
__turbopack_context__.k.register(_c, "ProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/ProgressBar/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ProgressBar$2f$progress$2d$bar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/ProgressBar/progress-bar.jsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/Layout/layout.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "wrapper": "layout-module-scss-module__sbs-6W__wrapper",
});
}),
"[project]/Work/Projects/Home-project/src/components/Layout/layout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layout",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Header$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Header/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Header$2f$header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Header/header.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Footer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Footer/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Footer$2f$footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Footer/footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ProgressBar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/ProgressBar/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ProgressBar$2f$progress$2d$bar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/ProgressBar/progress-bar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Layout$2f$layout$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Layout/layout.module.scss [app-client] (css module)");
'use client';
;
;
;
;
;
;
const Layout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Layout$2f$layout$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$ProgressBar$2f$progress$2d$bar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {}, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/Layout/layout.jsx",
                lineNumber: 14,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Header$2f$header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/Layout/layout.jsx",
                lineNumber: 15,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Work/Projects/Home-project/src/components/Layout/layout.jsx",
                    lineNumber: 17,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/Layout/layout.jsx",
                lineNumber: 16,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Footer$2f$footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Work/Projects/Home-project/src/components/Layout/layout.jsx",
                lineNumber: 21,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Work/Projects/Home-project/src/components/Layout/layout.jsx",
        lineNumber: 13,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/redux/entities/restaurants/get-restaurants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRestaurants",
    ()=>getRestaurants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$restaurants$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/restaurants/slice.js [app-client] (ecmascript)");
;
;
const getRestaurants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('restaurants/getRestaurants', async (_, { rejectWithValue })=>{
    const response = await fetch('http://localhost:3001/api/restaurants');
    const result = await response.json();
    if (!result.length) {
        rejectWithValue("no data");
        return;
    }
    return result;
}, {
    condition: (_, { getState })=>{
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$restaurants$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectRestaurantsTotal"])(getState());
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/redux/entities/restaurants/slice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "entityAdapter",
    ()=>entityAdapter,
    "restaurantSlice",
    ()=>restaurantSlice,
    "selectRequestStatus",
    ()=>selectRequestStatus,
    "selectRestaurantById",
    ()=>selectRestaurantById,
    "selectRestaurantsIds",
    ()=>selectRestaurantsIds,
    "selectRestaurantsTotal",
    ()=>selectRestaurantsTotal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$restaurants$2f$get$2d$restaurants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/restaurants/get-restaurants.js [app-client] (ecmascript)");
;
;
const entityAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
const restaurantSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'restaurantSlice',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder)=>builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$restaurants$2f$get$2d$restaurants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRestaurants"].fulfilled, (state, { payload })=>{
            entityAdapter.setAll(state, payload);
        })
});
const { selectRequestStatus } = restaurantSlice.selectors;
const selectRestaurantsSlice = (state)=>state.restaurantSlice;
const { selectIds: selectRestaurantsIds, selectById: selectRestaurantById, selectTotal: selectRestaurantsTotal } = entityAdapter.getSelectors(selectRestaurantsSlice);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/redux/entities/dishes/get-dishes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDishes",
    ()=>getDishes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const getDishes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dishes/getDishes', async (restaurantId, { rejectWithValue })=>{
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    const result = await response.json();
    if (!result.length) {
        rejectWithValue("no data");
        return;
    }
    return result;
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/redux/entities/dishes/slice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dishesSlice",
    ()=>dishesSlice,
    "selectDishById",
    ()=>selectDishById,
    "selectDishesIds",
    ()=>selectDishesIds,
    "selectRequestStatus",
    ()=>selectRequestStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$dishes$2f$get$2d$dishes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/dishes/get-dishes.js [app-client] (ecmascript)");
;
;
const entityAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
const dishesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'dishesSlice',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder)=>builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$dishes$2f$get$2d$dishes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDishes"].fulfilled, (state, { payload })=>{
            entityAdapter.setAll(state, payload);
        })
});
const { selectRequestStatus } = dishesSlice.selectors;
const selectDishesSlice = (state)=>state.dishesSlice;
const { selectById: selectDishById, selectIds: selectDishesIds } = entityAdapter.getSelectors(selectDishesSlice);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/redux/entities/reviews/get-reviews.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReviews",
    ()=>getReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const getReviews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('reviews/getReviews', async (restaurantId, { rejectWithValue })=>{
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    const result = await response.json();
    if (!result.length) {
        rejectWithValue("no data");
        return;
    }
    return result;
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/redux/entities/reviews/slice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "entityAdapter",
    ()=>entityAdapter,
    "reviewsSlice",
    ()=>reviewsSlice,
    "selectRequestStatus",
    ()=>selectRequestStatus,
    "selectReviewById",
    ()=>selectReviewById,
    "selectReviewsIds",
    ()=>selectReviewsIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$reviews$2f$get$2d$reviews$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/reviews/get-reviews.js [app-client] (ecmascript)");
;
;
const entityAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
const reviewsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'reviewsSlice',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder)=>builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$reviews$2f$get$2d$reviews$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReviews"].fulfilled, (state, { payload })=>{
            entityAdapter.setAll(state, payload);
        })
});
const { selectRequestStatus } = reviewsSlice.selectors;
const selectReviewsSlice = (state)=>state.reviewsSlice;
const { selectById: selectReviewById, selectIds: selectReviewsIds } = entityAdapter.getSelectors(selectReviewsSlice);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/redux/entities/users/get-users.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUsers",
    ()=>getUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$users$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/users/slice.js [app-client] (ecmascript)");
;
;
const getUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('users/getUsers', async (_, { rejectWithValue })=>{
    const response = await fetch(`http://localhost:3001/api/users`);
    const result = await response.json();
    if (!result.length) {
        rejectWithValue("no data");
        return;
    }
    return result;
}, {
    condition: (_, { getState })=>{
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$users$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectUsersTotal"])(getState());
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/redux/entities/users/slice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectRequestStatus",
    ()=>selectRequestStatus,
    "selectUserById",
    ()=>selectUserById,
    "selectUsersIds",
    ()=>selectUsersIds,
    "selectUsersTotal",
    ()=>selectUsersTotal,
    "usersSlice",
    ()=>usersSlice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$users$2f$get$2d$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/users/get-users.js [app-client] (ecmascript)");
;
;
const entityAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
const usersSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "usersSlice",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder)=>builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$users$2f$get$2d$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUsers"].fulfilled, (state, { payload })=>{
            entityAdapter.setAll(state, payload);
        })
});
const { selectRequestStatus } = usersSlice.selectors;
const selectUsersSlice = (state)=>state.usersSlice;
const { selectById: selectUserById, selectIds: selectUsersIds, selectTotal: selectUsersTotal } = entityAdapter.getSelectors(selectUsersSlice);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/redux/entities/request/slice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requestSlice",
    ()=>requestSlice,
    "selectIsLoading",
    ()=>selectIsLoading,
    "selectRequestStatus",
    ()=>selectRequestStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const requestSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'request',
    initialState: {},
    selectors: {
        selectIsLoading: (state, id)=>state[id] === 'pending',
        selectRequestStatus: (state, id)=>state[id] || 'idle'
    },
    extraReducers: (builder)=>builder.addMatcher(({ type })=>type.endsWith('pending'), (state, { meta })=>{
            state[meta.requestId] = 'pending';
        }).addMatcher(({ type })=>type.endsWith('rejected'), (state, { meta })=>{
            state[meta.requestId] = 'rejected';
        }).addMatcher(({ type })=>type.endsWith('fulfilled'), (state, { meta })=>{
            state[meta.requestId] = 'fulfilled';
        })
});
const { selectIsLoading, selectRequestStatus } = requestSlice.selectors;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/redux/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$restaurants$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/restaurants/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/cart/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$dishes$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/dishes/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$reviews$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/reviews/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$users$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/users/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$request$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/entities/request/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/services/api.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$restaurants$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restaurantSlice"].name]: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$restaurants$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restaurantSlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$dishes$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dishesSlice"].name]: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$dishes$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dishesSlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$reviews$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviewsSlice"].name]: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$reviews$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviewsSlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$users$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersSlice"].name]: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$users$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersSlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartSlice"].name]: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$cart$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartSlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$request$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestSlice"].name]: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$entities$2f$request$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestSlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].middleware)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/app/StoreProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoreProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/redux/store.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StoreProvider({ children }) {
    _s();
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!storeRef.current) {
        storeRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$redux$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: storeRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/app/StoreProvider.js",
        lineNumber: 12,
        columnNumber: 11
    }, this);
}
_s(StoreProvider, "EtiU7pDwGhTDZwMnrKEqZbxjqXE=");
_c = StoreProvider;
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Work_Projects_Home-project_src_b830b09f._.js.map