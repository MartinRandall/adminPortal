import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, AfterViewInit {

  menuCollapsed = false;
  body: any;
  menu_toggle: any;
  left_col: any;
  right_col: any;
  footer: any;
  sidebar_footer: any;

  constructor() {
  }

  ngAfterViewInit(): void {
    const right_col = $('.right_col');
    right_col.css('min-height', $(window).height());
    console.log('view-init');
  }

  ngOnInit() {

    this.body = $('body');
    this.menu_toggle = $('#menu_toggle');
    this.left_col = $('.left_col');
    this.right_col = $('.right_col');
    this.footer = $('footer');
    this.sidebar_footer = $('.sidebar-footer');

    $('#sidebar-menu').find('a').on('click', function (ev) {
      const sidebar_menu = $('#sidebar-menu');
      const right_col = $('.right_col');
      const $li = $(this).parent();

      if ($li.is('.active') || $li.is('.active-sm')) {
        $li.removeClass('active active-sm');
        $('ul:first', $li).slideUp(function () {
          right_col.css('min-height', $(window).height());
        });
      } else {
        const parent = $li.parent();

        // prevent closing menu if we are on child menu
        if (!parent.is('.child_menu')) {
          $li.siblings().removeClass('active active-sm');
          sidebar_menu.find('li ul').slideUp();
        } else {
          parent.find('li').removeClass('active active-sm');
        }

        $li.addClass('active');

        $('ul:first', $li).slideDown(function () {
          right_col.css('min-height', $(window).height());
        });
      }
    });

  }

  menuToggle() {
    const sidebar_menu = $('#sidebar-menu');
    if (this.menuCollapsed) {
      sidebar_menu.find('li.active ul').hide();
      sidebar_menu.find('li.active').addClass('active-sm').removeClass('active');
    } else {
      sidebar_menu.find('li.active-sm ul').show();
      sidebar_menu.find('li.active-sm').addClass('active').removeClass('active-sm');
    }

    this.menuCollapsed = !this.menuCollapsed;
    this.right_col.css('min-height', $(window).height());
  }
}
