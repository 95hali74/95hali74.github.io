/**
 * Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.plugins =
		// 'about,' +
		// 'a11yhelp,' +
		'basicstyles,' +
		'bidi,' +
		// 'blockquote,' +
		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
		'contextmenu,' +
		'dialogadvtab,' +
		// 'div,' +
		// 'elementspath,' +
		'enterkey,' +
		'entities,' +
		// 'filebrowser,' +
		// 'find,' +
		// 'flash,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		// 'forms,' +
		// 'horizontalrule,' +
		// 'htmlwriter,' +
		// 'image,' +
		// 'iframe,' +
		'indentlist,' +
		'indentblock,' +
		'justify,' +
		'language,' +
		'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		// 'maximize,' +
		// 'newpage,' +
		// 'pagebreak,' +
		'pastefromword,' +
		'pastetext,' +
		// 'preview,' +
		// 'print,' +
		'removeformat,' +
		// 'resize,' +
		// 'save,' +
		// 'selectall,' +
		// 'showblocks,' +
		// 'showborders,' +
		// 'smiley,' +
		// 'sourcearea,' +
		'specialchar,' +
		// 'stylescombo,' +
		'tab,' +
		'table,' +
		'tabletools,' +
		// 'templates,' +
        'toolbar,' +
		'sourcedialog,' +
		// 'wysiwygarea,' +
		'undo';

    config.language = $h24.editorBrandname === 'Hemsida24' ? 'sv' : 'en';
    config.extraPlugins = 'h24link,h24fonts,h24html';
    config.removePlugins = 'liststyle,pastefromword';
    config.linkShowAdvancedTab = false;
    config.removeDialogTabs = 'table:advanced;tableProperties:advanced';
    config.allowedContent = true; // This setting is unfortunately needed because the h24link plugin uses a[rev] which isn't permitted otherwise
    config.forcePasteAsPlainText = true;
    config.enterMode = CKEDITOR.ENTER_BR;
    config.floatSpaceDockedOffsetX = 0;
    config.floatSpaceDockedOffsetY = 4;
    config.baseFloatZIndex = 991; // Above block controllers (990), below top panel (995)
    config.fillEmptyBlocks = false;
    config.fontSize_sizes = '8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;32/32px;36/36px;38/38px;42/42px;48/48px;52/52px;56/56px;62/62px;64/64px;68/68px;72/72px'; 
};

CKEDITOR.on('dialogDefinition', function(event) {
    var dialogName = event.data.name,
        dialogDefinition = event.data.definition,
        tab;

    // Remove some table settings
    if (dialogName == 'table' || dialogName == 'tableProperties') {
        tab = dialogDefinition.getContents('info');

        tab.remove('txtCaption');
        tab.remove('txtSummary');

        // txtBorder isn't allowed to be removed by CKEditor - hide it
        tab.get('txtBorder').controlStyle += ';display:none';
        tab.get('txtBorder').label = '';
    }
});

