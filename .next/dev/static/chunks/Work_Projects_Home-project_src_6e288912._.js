(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "login-form-module-scss-module__KRC34a__container",
  "error": "login-form-module-scss-module__KRC34a__error",
  "field": "login-form-module-scss-module__KRC34a__field",
  "footer": "login-form-module-scss-module__KRC34a__footer",
  "form": "login-form-module-scss-module__KRC34a__form",
  "formWrapper": "login-form-module-scss-module__KRC34a__formWrapper",
  "input": "login-form-module-scss-module__KRC34a__input",
  "label": "login-form-module-scss-module__KRC34a__label",
  "link": "login-form-module-scss-module__KRC34a__link",
  "submitButton": "login-form-module-scss-module__KRC34a__submitButton",
  "title": "login-form-module-scss-module__KRC34a__title",
});
}),
"[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$AuthContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/AuthContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/Button/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$BaseLink$2f$base$2d$link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/BaseLink/base-link.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const LoginForm = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { login, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$AuthContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"]);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        const result = await login(email, password);
        if (result.success) {
            router.push('/restaurants');
        } else {
            setError(result.error || 'Login failed');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formWrapper,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                    lineNumber: 38,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                            lineNumber: 41,
                            columnNumber: 26
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                                    lineNumber: 44,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "email",
                                    type: "email",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                    placeholder: "your@email.com",
                                    disabled: isLoading
                                }, void 0, false, {
                                    fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                                    lineNumber: 47,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                            lineNumber: 43,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                                    lineNumber: 59,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "password",
                                    type: "password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                    placeholder: "••••••••",
                                    disabled: isLoading
                                }, void 0, false, {
                                    fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                                    lineNumber: 62,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                            lineNumber: 58,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$Button$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            disabled: isLoading,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                            children: isLoading ? 'Logging in...' : 'Login'
                        }, void 0, false, {
                            fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                            lineNumber: 73,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                    lineNumber: 40,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Don't have an account?",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$BaseLink$2f$base$2d$link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseLink"], {
                                to: "/auth/register",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                                children: "Register"
                            }, void 0, false, {
                                fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                                lineNumber: 81,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                        lineNumber: 79,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
                    lineNumber: 78,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
            lineNumber: 37,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx",
        lineNumber: 36,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoginForm, "sVp8r0m4l2KFVtMHNZ59dkNW6nM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/components/LoginForm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/Projects/Home-project/src/app/auth/login/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/LoginForm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/Projects/Home-project/src/components/LoginForm/login-form.jsx [app-client] (ecmascript)");
'use client';
;
;
function LoginPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$Projects$2f$Home$2d$project$2f$src$2f$components$2f$LoginForm$2f$login$2d$form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginForm"], {}, void 0, false, {
        fileName: "[project]/Work/Projects/Home-project/src/app/auth/login/page.js",
        lineNumber: 6,
        columnNumber: 11
    }, this);
}
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Work_Projects_Home-project_src_6e288912._.js.map