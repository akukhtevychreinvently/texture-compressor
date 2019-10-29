"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * General constants
 */
exports.COMPRESSION_FORMAT_FLAGS = ['etc', 'pvrtc'];
/**
 * Compression tool: PVRTexTool (http://cdn.imgtec.com/sdk-documentation/PVRTexTool.User+Manual.pdf)
 * WebGL extension: https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
 */
exports.ETC = 'etc';
exports.IS_ETC = process.argv.includes(exports.ETC);
exports.ETC_SUPPORTED_INPUT_TYPES = ['.jpeg', '.jpg', '.png', '.bmp'];
exports.ETC_SUPPORTED_OUTPUT_TYPES = ['.ktx'];
exports.ETC_COMPRESSION_TYPES = ['ETC1', 'ETC2_RGBA', 'ETC2_RGB'];
exports.ETC_QUALITY_TYPES = ['etcfast', 'etcslow', 'etcfastperceptual', 'etcslowperceptual'];
/**
 * Compression tool: PVRTexTool (http://cdn.imgtec.com/sdk-documentation/PVRTexTool.User+Manual.pdf)
 * WebGL extension: http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
 */
exports.PVRTC = 'pvrtc';
exports.IS_PVRTC = process.argv.includes(exports.PVRTC);
exports.PVRTC_SUPPORTED_INPUT_TYPES = ['.jpeg', '.jpg', '.png', '.bmp'];
exports.PVRTC_SUPPORTED_OUTPUT_TYPES = ['.ktx', '.pvr'];
exports.PVRTC_COMPRESSION_TYPES = ['PVRTC1_2', 'PVRTC1_4', 'PVRTC1_2_RGB', 'PVRTC1_4_RGB'];
exports.PVRTC_QUALITY_TYPES = [
    'pvrtcfastest',
    'pvrtcfast',
    'pvrtcnormal',
    'pvrtchigh',
    'pvrtcbest',
];
//# sourceMappingURL=constants.js.map