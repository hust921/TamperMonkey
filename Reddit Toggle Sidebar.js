// ==UserScript==
// @name         Reddit Toggle Sidebar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds button to show/hide reddit sidebar
// @author       <92morten@gmail.com>
// @match        https://www.reddit.com/*
// @match        http://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function  ToggleSidebar()
    {
        // Show and Hide sidebar
        if ($('.side').attr('style')) 
        {
            if ($('.side').attr('style').match('none')) {
                $('.side').css('display', 'block');
                $('#ToggleSidebarButton').html('Hide Sidebar');
            }
            else  {
                $('.side').css('display', 'none');
                $('#ToggleSidebarButton').html('Show Sidebar');
            }
        }  else  {
                 $('.side').css('display', 'none');
            $('#ToggleSidebarButton').html('Show Sidebar');
        }
    }
    
    $('#header-bottom-right').prepend('<button type="button" id="ToggleSidebarButton">Hide Sidebar</button> ');
    $('#ToggleSidebarButton').click(ToggleSidebar);
})();