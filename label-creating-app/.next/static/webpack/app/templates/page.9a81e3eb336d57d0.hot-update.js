"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/templates/page",{

/***/ "(app-pages-browser)/./src/app/templates/page.js":
/*!***********************************!*\
  !*** ./src/app/templates/page.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TemplatePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* \nFiles needed from the user:\n1. Template file (HTML)\n2. Font file (TTF)\n3. Logo file (PNG)\n4. CSV file\n\n*/ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction TemplatePage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        template: null,\n        csv: null\n    });\n    const [uploadStatus, setUploadStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        template: \"idle\",\n        csv: \"idle\"\n    });\n    const handleFileChange = (fileType)=>(e)=>{\n            const file = e.target.files[0];\n            if (file) {\n                setFiles((prev)=>({\n                        ...prev,\n                        [fileType]: file\n                    }));\n                setUploadStatus((prev)=>({\n                        ...prev,\n                        [fileType]: \"file selected\"\n                    }));\n            }\n        };\n    const handleUpload = async (fileType)=>{\n        const file = files[fileType];\n        if (!file) {\n            setUploadStatus((prev)=>({\n                    ...prev,\n                    [fileType]: \"please choose a file first\"\n                }));\n            return;\n        }\n        try {\n            setUploadStatus((prev)=>({\n                    ...prev,\n                    [fileType]: \"uploading\"\n                }));\n            const formData = new FormData();\n            formData.append(\"file\", file);\n            formData.append(\"type\", fileType);\n            const response = await fetch(\"/api/upload\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (!response.ok) {\n                throw new Error(\"upload failed\");\n            }\n            setUploadStatus((prev)=>({\n                    ...prev,\n                    [fileType]: \"uploaded\"\n                }));\n            setFiles((prev)=>({\n                    ...prev,\n                    [fileType]: null\n                }));\n            // Check if both files are uploaded\n            if (fileType === 'csv' && uploadStatus.template === 'uploaded') {\n                router.push('/generate'); // Navigate to next page\n            }\n        } catch (error) {\n            console.error(\"upload error:\", error);\n            setUploadStatus((prev)=>({\n                    ...prev,\n                    [fileType]: \"upload failed\"\n                }));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white text-black p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-6\",\n                children: \"File Upload\"\n            }, void 0, false, {\n                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-medium mb-2\",\n                                children: \"Template\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \".html\",\n                                onChange: handleFileChange(\"template\"),\n                                className: \"block mb-2 border border-black p-1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            files.template && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm\",\n                                children: files.template.name\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 98,\n                                columnNumber: 30\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleUpload(\"template\"),\n                                className: \"px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50\",\n                                disabled: !files.template,\n                                children: \"Upload Template\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm mt-2\",\n                                children: uploadStatus.template\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-medium mb-2\",\n                                children: \"Template\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \".html\",\n                                onChange: handleFileChange(\"template\"),\n                                className: \"block mb-2 border border-black p-1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this),\n                            files.template && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm\",\n                                children: files.template.name\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 117,\n                                columnNumber: 30\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleUpload(\"template\"),\n                                className: \"px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50\",\n                                disabled: !files.template,\n                                children: \"Upload Font File\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm mt-2\",\n                                children: uploadStatus.template\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 125,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-medium mb-2\",\n                                children: \"Template\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \".html\",\n                                onChange: handleFileChange(\"template\"),\n                                className: \"block mb-2 border border-black p-1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, this),\n                            files.template && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm\",\n                                children: files.template.name\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 136,\n                                columnNumber: 30\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleUpload(\"template\"),\n                                className: \"px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50\",\n                                disabled: !files.template,\n                                children: \"Upload Template\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm mt-2\",\n                                children: uploadStatus.template\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 144,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-medium mb-2\",\n                                children: \"CSV Data\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 148,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \".csv\",\n                                onChange: handleFileChange(\"csv\"),\n                                className: \"block mb-2 border border-black p-1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 149,\n                                columnNumber: 11\n                            }, this),\n                            files.csv && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm\",\n                                children: files.csv.name\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 155,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleUpload(\"csv\"),\n                                className: \"px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50\",\n                                disabled: !files.csv || uploadStatus.template !== \"uploaded\",\n                                children: \"Upload CSV\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 156,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm mt-2\",\n                                children: uploadStatus.csv\n                            }, void 0, false, {\n                                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                                lineNumber: 163,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/templates/page.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(TemplatePage, \"ry6mpnVLdWsWLrhxjQqpeIICWLE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = TemplatePage;\nvar _c;\n$RefreshReg$(_c, \"TemplatePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGVtcGxhdGVzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9BOztBQUdpQztBQUNXO0FBRTdCLFNBQVNFOztJQUN0QixNQUFNQyxTQUFTRiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDRyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ2pDTSxVQUFVO1FBQ1ZDLEtBQUs7SUFDUDtJQUNBLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO1FBQy9DTSxVQUFVO1FBQ1ZDLEtBQUs7SUFDUDtJQUVBLE1BQU1HLG1CQUFtQixDQUFDQyxXQUFhLENBQUNDO1lBQ3RDLE1BQU1DLE9BQU9ELEVBQUVFLE1BQU0sQ0FBQ1YsS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSVMsTUFBTTtnQkFDUlIsU0FBUyxDQUFDVSxPQUFVO3dCQUFFLEdBQUdBLElBQUk7d0JBQUUsQ0FBQ0osU0FBUyxFQUFFRTtvQkFBSztnQkFDaERKLGdCQUFnQixDQUFDTSxPQUFVO3dCQUN6QixHQUFHQSxJQUFJO3dCQUNQLENBQUNKLFNBQVMsRUFBRTtvQkFDZDtZQUNGO1FBQ0Y7SUFFQSxNQUFNSyxlQUFlLE9BQU9MO1FBQzFCLE1BQU1FLE9BQU9ULEtBQUssQ0FBQ08sU0FBUztRQUM1QixJQUFJLENBQUNFLE1BQU07WUFDVEosZ0JBQWdCLENBQUNNLE9BQVU7b0JBQ3pCLEdBQUdBLElBQUk7b0JBQ1AsQ0FBQ0osU0FBUyxFQUFFO2dCQUNkO1lBQ0E7UUFDRjtRQUVBLElBQUk7WUFDRkYsZ0JBQWdCLENBQUNNLE9BQVU7b0JBQ3pCLEdBQUdBLElBQUk7b0JBQ1AsQ0FBQ0osU0FBUyxFQUFFO2dCQUNkO1lBRUEsTUFBTU0sV0FBVyxJQUFJQztZQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFFBQVFOO1lBQ3hCSSxTQUFTRSxNQUFNLENBQUMsUUFBUVI7WUFFeEIsTUFBTVMsV0FBVyxNQUFNQyxNQUFNLGVBQWU7Z0JBQzFDQyxRQUFRO2dCQUNSQyxNQUFNTjtZQUNSO1lBRUEsSUFBSSxDQUFDRyxTQUFTSSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBaEIsZ0JBQWdCLENBQUNNLE9BQVU7b0JBQ3pCLEdBQUdBLElBQUk7b0JBQ1AsQ0FBQ0osU0FBUyxFQUFFO2dCQUNkO1lBQ0FOLFNBQVMsQ0FBQ1UsT0FBVTtvQkFBRSxHQUFHQSxJQUFJO29CQUFFLENBQUNKLFNBQVMsRUFBRTtnQkFBSztZQUVoRCxtQ0FBbUM7WUFDbkMsSUFBSUEsYUFBYSxTQUFTSCxhQUFhRixRQUFRLEtBQUssWUFBWTtnQkFDOURILE9BQU91QixJQUFJLENBQUMsY0FBYyx3QkFBd0I7WUFDcEQ7UUFFRixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLGlCQUFpQkE7WUFDL0JsQixnQkFBZ0IsQ0FBQ00sT0FBVTtvQkFDekIsR0FBR0EsSUFBSTtvQkFDUCxDQUFDSixTQUFTLEVBQUU7Z0JBQ2Q7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBRXhDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQTJCOzs7Ozs7MENBQ3pDLDhEQUFDRztnQ0FDQ0MsTUFBSztnQ0FDTEMsUUFBTztnQ0FDUEMsVUFBVTFCLGlCQUFpQjtnQ0FDM0JvQixXQUFVOzs7Ozs7NEJBRVgxQixNQUFNRSxRQUFRLGtCQUFJLDhEQUFDK0I7Z0NBQUVQLFdBQVU7MENBQVcxQixNQUFNRSxRQUFRLENBQUNnQyxJQUFJOzs7Ozs7MENBQzlELDhEQUFDQztnQ0FDQ0MsU0FBUyxJQUFNeEIsYUFBYTtnQ0FDNUJjLFdBQVU7Z0NBQ1ZXLFVBQVUsQ0FBQ3JDLE1BQU1FLFFBQVE7MENBQzFCOzs7Ozs7MENBR0QsOERBQUMrQjtnQ0FBRVAsV0FBVTswQ0FBZ0J0QixhQUFhRixRQUFROzs7Ozs7Ozs7Ozs7a0NBR3BELDhEQUFDdUI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBMkI7Ozs7OzswQ0FDekMsOERBQUNHO2dDQUNDQyxNQUFLO2dDQUNMQyxRQUFPO2dDQUNQQyxVQUFVMUIsaUJBQWlCO2dDQUMzQm9CLFdBQVU7Ozs7Ozs0QkFFWDFCLE1BQU1FLFFBQVEsa0JBQUksOERBQUMrQjtnQ0FBRVAsV0FBVTswQ0FBVzFCLE1BQU1FLFFBQVEsQ0FBQ2dDLElBQUk7Ozs7OzswQ0FDOUQsOERBQUNDO2dDQUNDQyxTQUFTLElBQU14QixhQUFhO2dDQUM1QmMsV0FBVTtnQ0FDVlcsVUFBVSxDQUFDckMsTUFBTUUsUUFBUTswQ0FDMUI7Ozs7OzswQ0FHRCw4REFBQytCO2dDQUFFUCxXQUFVOzBDQUFnQnRCLGFBQWFGLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHcEQsOERBQUN1Qjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFHRixXQUFVOzBDQUEyQjs7Ozs7OzBDQUN6Qyw4REFBQ0c7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFFBQU87Z0NBQ1BDLFVBQVUxQixpQkFBaUI7Z0NBQzNCb0IsV0FBVTs7Ozs7OzRCQUVYMUIsTUFBTUUsUUFBUSxrQkFBSSw4REFBQytCO2dDQUFFUCxXQUFVOzBDQUFXMUIsTUFBTUUsUUFBUSxDQUFDZ0MsSUFBSTs7Ozs7OzBDQUM5RCw4REFBQ0M7Z0NBQ0NDLFNBQVMsSUFBTXhCLGFBQWE7Z0NBQzVCYyxXQUFVO2dDQUNWVyxVQUFVLENBQUNyQyxNQUFNRSxRQUFROzBDQUMxQjs7Ozs7OzBDQUdELDhEQUFDK0I7Z0NBQUVQLFdBQVU7MENBQWdCdEIsYUFBYUYsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdwRCw4REFBQ3VCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQTJCOzs7Ozs7MENBQ3pDLDhEQUFDRztnQ0FDQ0MsTUFBSztnQ0FDTEMsUUFBTztnQ0FDUEMsVUFBVTFCLGlCQUFpQjtnQ0FDM0JvQixXQUFVOzs7Ozs7NEJBRVgxQixNQUFNRyxHQUFHLGtCQUFJLDhEQUFDOEI7Z0NBQUVQLFdBQVU7MENBQVcxQixNQUFNRyxHQUFHLENBQUMrQixJQUFJOzs7Ozs7MENBQ3BELDhEQUFDQztnQ0FDQ0MsU0FBUyxJQUFNeEIsYUFBYTtnQ0FDNUJjLFdBQVU7Z0NBQ1ZXLFVBQVUsQ0FBQ3JDLE1BQU1HLEdBQUcsSUFBSUMsYUFBYUYsUUFBUSxLQUFLOzBDQUNuRDs7Ozs7OzBDQUdELDhEQUFDK0I7Z0NBQUVQLFdBQVU7MENBQWdCdEIsYUFBYUQsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZEO0dBMUp3Qkw7O1FBQ1BELHNEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyIvVXNlcnMvemVsYWxlbW1la29ubmVuL0Rlc2t0b3AvUGl4ZWxQZWFrL3Byb2plY3RzL2xhYmVsLWNyZWF0aW5nLWFwcC9sYWJlbC1jcmVhdGluZy1hcHAvbGFiZWwtY3JlYXRpbmctYXBwL3NyYy9hcHAvdGVtcGxhdGVzL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogXG5GaWxlcyBuZWVkZWQgZnJvbSB0aGUgdXNlcjpcbjEuIFRlbXBsYXRlIGZpbGUgKEhUTUwpXG4yLiBGb250IGZpbGUgKFRURilcbjMuIExvZ28gZmlsZSAoUE5HKVxuNC4gQ1NWIGZpbGVcblxuKi9cblxuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZW1wbGF0ZVBhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKHtcbiAgICB0ZW1wbGF0ZTogbnVsbCxcbiAgICBjc3Y6IG51bGwsXG4gIH0pO1xuICBjb25zdCBbdXBsb2FkU3RhdHVzLCBzZXRVcGxvYWRTdGF0dXNdID0gdXNlU3RhdGUoe1xuICAgIHRlbXBsYXRlOiBcImlkbGVcIixcbiAgICBjc3Y6IFwiaWRsZVwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGZpbGVUeXBlKSA9PiAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgc2V0RmlsZXMoKHByZXYpID0+ICh7IC4uLnByZXYsIFtmaWxlVHlwZV06IGZpbGUgfSkpO1xuICAgICAgc2V0VXBsb2FkU3RhdHVzKChwcmV2KSA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBbZmlsZVR5cGVdOiBcImZpbGUgc2VsZWN0ZWRcIixcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKGZpbGVUeXBlKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGZpbGVzW2ZpbGVUeXBlXTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHNldFVwbG9hZFN0YXR1cygocHJldikgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgW2ZpbGVUeXBlXTogXCJwbGVhc2UgY2hvb3NlIGEgZmlsZSBmaXJzdFwiLFxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBzZXRVcGxvYWRTdGF0dXMoKHByZXYpID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIFtmaWxlVHlwZV06IFwidXBsb2FkaW5nXCIsXG4gICAgICB9KSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwidHlwZVwiLCBmaWxlVHlwZSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VwbG9hZFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXBsb2FkIGZhaWxlZFwiKTtcbiAgICAgIH1cblxuICAgICAgc2V0VXBsb2FkU3RhdHVzKChwcmV2KSA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBbZmlsZVR5cGVdOiBcInVwbG9hZGVkXCIsXG4gICAgICB9KSk7XG4gICAgICBzZXRGaWxlcygocHJldikgPT4gKHsgLi4ucHJldiwgW2ZpbGVUeXBlXTogbnVsbCB9KSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIGJvdGggZmlsZXMgYXJlIHVwbG9hZGVkXG4gICAgICBpZiAoZmlsZVR5cGUgPT09ICdjc3YnICYmIHVwbG9hZFN0YXR1cy50ZW1wbGF0ZSA9PT0gJ3VwbG9hZGVkJykge1xuICAgICAgICByb3V0ZXIucHVzaCgnL2dlbmVyYXRlJyk7IC8vIE5hdmlnYXRlIHRvIG5leHQgcGFnZVxuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1cGxvYWQgZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIHNldFVwbG9hZFN0YXR1cygocHJldikgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgW2ZpbGVUeXBlXTogXCJ1cGxvYWQgZmFpbGVkXCIsXG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHAtNlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi02XCI+RmlsZSBVcGxvYWQ8L2gxPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTRcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBtYi0yXCI+VGVtcGxhdGU8L2gyPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgYWNjZXB0PVwiLmh0bWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2UoXCJ0ZW1wbGF0ZVwiKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgYm9yZGVyIGJvcmRlci1ibGFjayBwLTFcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAge2ZpbGVzLnRlbXBsYXRlICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57ZmlsZXMudGVtcGxhdGUubmFtZX08L3A+fVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVwbG9hZChcInRlbXBsYXRlXCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWJsYWNrIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTgwMCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZmlsZXMudGVtcGxhdGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVXBsb2FkIFRlbXBsYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtdC0yXCI+e3VwbG9hZFN0YXR1cy50ZW1wbGF0ZX08L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtNFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTJcIj5UZW1wbGF0ZTwvaDI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBhY2NlcHQ9XCIuaHRtbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZShcInRlbXBsYXRlXCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiBib3JkZXIgYm9yZGVyLWJsYWNrIHAtMVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZmlsZXMudGVtcGxhdGUgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntmaWxlcy50ZW1wbGF0ZS5uYW1lfTwvcD59XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVXBsb2FkKFwidGVtcGxhdGVcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctYmxhY2sgdGV4dC13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLWdyYXktODAwIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFmaWxlcy50ZW1wbGF0ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBVcGxvYWQgRm9udCBGaWxlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtdC0yXCI+e3VwbG9hZFN0YXR1cy50ZW1wbGF0ZX08L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtNFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTJcIj5UZW1wbGF0ZTwvaDI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBhY2NlcHQ9XCIuaHRtbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZShcInRlbXBsYXRlXCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiBib3JkZXIgYm9yZGVyLWJsYWNrIHAtMVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZmlsZXMudGVtcGxhdGUgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntmaWxlcy50ZW1wbGF0ZS5uYW1lfTwvcD59XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVXBsb2FkKFwidGVtcGxhdGVcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctYmxhY2sgdGV4dC13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLWdyYXktODAwIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFmaWxlcy50ZW1wbGF0ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBVcGxvYWQgVGVtcGxhdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG10LTJcIj57dXBsb2FkU3RhdHVzLnRlbXBsYXRlfTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC00XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbWItMlwiPkNTViBEYXRhPC9oMj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGFjY2VwdD1cIi5jc3ZcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2UoXCJjc3ZcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtYi0yIGJvcmRlciBib3JkZXItYmxhY2sgcC0xXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHtmaWxlcy5jc3YgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntmaWxlcy5jc3YubmFtZX08L3A+fVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVwbG9hZChcImNzdlwiKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ibGFjayB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctZ3JheS04MDAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17IWZpbGVzLmNzdiB8fCB1cGxvYWRTdGF0dXMudGVtcGxhdGUgIT09IFwidXBsb2FkZWRcIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBVcGxvYWQgQ1NWXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtdC0yXCI+e3VwbG9hZFN0YXR1cy5jc3Z9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiVGVtcGxhdGVQYWdlIiwicm91dGVyIiwiZmlsZXMiLCJzZXRGaWxlcyIsInRlbXBsYXRlIiwiY3N2IiwidXBsb2FkU3RhdHVzIiwic2V0VXBsb2FkU3RhdHVzIiwiaGFuZGxlRmlsZUNoYW5nZSIsImZpbGVUeXBlIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJwcmV2IiwiaGFuZGxlVXBsb2FkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJFcnJvciIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJwIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/templates/page.js\n"));

/***/ })

});