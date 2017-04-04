import {Component, ElementRef, Input} from '@angular/core';
@Component({
  selector: 'panel',
  templateUrl: './panel-component.html',
  styleUrls: ['./panel-component.scss']
})
export class PanelComponent {

  @Input() showCloseButton: boolean;
  @Input() showMenu: boolean;
  @Input() showCollapseButton: boolean = true;

  togglePanelOpen(event) {
    const $link  = $(event.currentTarget);

    const $boxPanel = $link.closest('.x_panel'),
      $icon = $link.find('i'),
      $boxContent = $boxPanel.find('.x_content');

    // fix for some div with hardcoded fix class
    if ($boxPanel.attr('style')) {
      $boxContent.slideToggle(200, function(){
        $boxPanel.removeAttr('style');
      });
    } else {
      $boxContent.slideToggle(200);
      $boxPanel.css('height', 'auto');
    }

    $icon.toggleClass('fa-chevron-up fa-chevron-down');
  }

}
