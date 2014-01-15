//�Q��canvas���ͤ@�Ӥ��t��r������
function createMarkerIcon(text, opt) {
    //�w�q�w�]�Ѽ�
    var defaultOptions = {
        fontStyle: "normal", //normal, bold, italic
        fontName: "Arial",
        fontSize: 12, //�HPixel�����
        bgColor: "darkblue",
        fgColor: "white",
        padding: 4,
        arrowHeight: 6 //�U��y������
    };
    options = $.extend(defaultOptions, opt);
    //�إ�Canvas�A�}�l�F����
    var canvas = document.createElement("canvas"),
                    context = canvas.getContext("2d");
    //������r�ؤo
    var font = options.fontStyle + " " + options.fontSize + "px " +
                           options.fontName;
    context.font = font;
    var metrics = context.measureText(text);
    //��r�j�p�[�Wpadding�@���~���ؤo
    var w = metrics.width + options.padding * 2;
    //���ץHFont���j�p����
    var h = options.fontSize + options.padding * 2 +
                        options.arrowHeight;
    canvas.width = w;
    canvas.height = h;
    //��ؤέI��
    context.beginPath();
    context.rect(0, 0, w, h - options.arrowHeight);
    context.fillStyle = options.bgColor;
    context.fill();
    //�e�X�U��y��
    context.beginPath();
    var x = w / 2, y = h, arwSz = options.arrowHeight;
    context.moveTo(x, y);
    context.lineTo(x - arwSz, y - arwSz);
    context.lineTo(x + arwSz, y - arwSz);
    context.lineTo(x, y);
    context.fill();
    //�L�X��r
    context.textAlign = "center";
    context.fillStyle = options.fgColor;
    context.font = font;
    context.fillText(text,
                    w / 2,
                    (h - options.arrowHeight) / 2 + options.padding);
    //�Ǧ^DataURI�r��
    return canvas.toDataURL();
}