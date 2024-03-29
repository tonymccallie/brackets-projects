/*
 * Copyright (c) 2013 Tony McCallie
 *
 * Licensed under MIT
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */


/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window, CodeMirror */

define(function (require, exports, module) {
    "use strict";

    var CommandManager      = brackets.getModule("command/CommandManager"),
        Menus               = brackets.getModule("command/Menus"),
        PreferencesManager  = brackets.getModule("preferences/PreferencesManager"),
        EditorManager       = brackets.getModule("editor/EditorManager"),
        ExtensionUtils      = brackets.getModule("utils/ExtensionUtils"),
        AppInit             = brackets.getModule("utils/AppInit"),
        FileUtils           = brackets.getModule("file/FileUtils"),
        NativeFileSystem    = brackets.getModule("file/NativeFileSystem").NativeFileSystem;

    var PREFERENCES_KEY = "extensions.brackets-projects";
    var preferences = PreferencesManager.getPreferenceStorage(PREFERENCES_KEY);

    // Forward declaration to avoid JSLint error
    var menuHandler = null, themeManager = null;

    menuHandler = (function () {
        // Look for the menu where we will be inserting our theme menu
        var menu = Menus.addMenu("Projects", "projects", Menus.BEFORE, Menus.AppMenuBar.FILE_MENU);

        function register() {
        
        };
        
        function updateSelection() {
            
        }
        
        return {
            register: register,
            updateSelection: updateSelection,
            addDivider: function () {
                menu.addMenuDivider();
            },
            addItem: function (commandId) {
                menu.addMenuItem(commandId);
            }
        };

    })();

});
