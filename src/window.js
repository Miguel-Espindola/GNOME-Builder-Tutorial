/* window.js
 *
 * Copyright 2024 miguel
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import Adw from 'gi://Adw';

export const GnomeTutorialWindow = GObject.registerClass({
    GTypeName: 'GnomeTutorialWindow',
    Template: 'resource:///com/example/TextViewer/window.ui',
    InternalChildren: ['label'],
}, class GnomeTutorialWindow extends Adw.ApplicationWindow {
    constructor(application) {
        super({ application });
    }
});

