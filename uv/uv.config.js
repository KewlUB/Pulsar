self.__uv$config = {
    prefix: '/char-service/',
    bare:'https://bear.rooboy35.com',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
