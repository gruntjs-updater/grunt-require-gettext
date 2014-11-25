/* ding
 * dong
 */
define('contextCollision', [
    'randomModule',
    'gettext!test/mySimpleModule',
    'randomModule2',
    'gettext!test/alternativeGTModule',
    'gettext!test/unusedGTModule'
], function (random, gt, random2, altGT) {
    'use strict';

    console.log(gt('Do you really want to delete this item?'));
    console.log(gt.ngettext('Do you really want to delete this item?', 'Do you really want to delete these items?', items.length));
    return {}
});
