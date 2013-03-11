(function($) {
    
    $.fn.stickyfloat = function(options) {
        // todo: genericize this to work across all selected jquery objects
        
        var opt = $.extend($.fn.stickyfloat.defaults, options),
            $this = this,
            $container = opt.container || $this.parent(),
            $window = $(window),
            $document = $(document),
            originalPosition = {
                offset: $this.offset(),
                top: $this.css('top'),
                left: $this.css('left'),
                width: $this.width()
            },
            originalContainerPosition = {
                offset: $container.offset()
            };

        var onScroll = function() {
            var parentPaddingTop = parseInt($container.css('padding-top')),
                containerOffset = $container.offset(),
                bottomY = $container.height() - $this.height() + parentPaddingTop,
                scrolledPastContainerTop = $document.scrollTop() > containerOffset.top,
                floatPastContainerBottom = $document.scrollTop() > containerOffset.top + bottomY,
                floatLargerThanContainer = $this.outerHeight() >= $container.outerHeight();

            if (bottomY < 0) {
                bottomY = 0;
            }

            if (floatLargerThanContainer || !scrolledPastContainerTop) {
                $this
                    .css('position', 'relative')
                    .css('top', 0)
                    .css('left', 0);
            } else if (floatPastContainerBottom) {
                $this
                    .css('position', 'absolute')
                    .css('top', bottomY)
                    .css('left', 0);
            } else {
                $this
                    .css('position', 'fixed')
                    .css('top', 0)
                    .css('left', originalPosition.offset.left + (containerOffset.left - originalContainerPosition.offset.left))
                    .css('width', originalPosition.width);
            }
        };

        var onResize = function() {
            onScroll();
        };

        $window.scroll(onScroll);
        $window.resize(onResize);
    };

    $.fn.stickyfloat.defaults = {

    };
    
}(jQuery));
