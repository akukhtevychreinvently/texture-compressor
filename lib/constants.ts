/**
 * General constants
 */
export const COMPRESSION_FORMAT_FLAGS = ['etc', 'pvrtc'];


/**
 * Compression tool: PVRTexTool (http://cdn.imgtec.com/sdk-documentation/PVRTexTool.User+Manual.pdf)
 * WebGL extension: https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
 */
export const ETC = 'etc';
export const IS_ETC = process.argv.includes(ETC);
export const ETC_SUPPORTED_INPUT_TYPES = ['.jpeg', '.jpg', '.png', '.bmp'];
export const ETC_SUPPORTED_OUTPUT_TYPES = ['.ktx'];
export const ETC_COMPRESSION_TYPES = ['ETC1', 'ETC2_RGBA', 'ETC2_RGB'];
export const ETC_QUALITY_TYPES = ['etcfast', 'etcslow', 'etcfastperceptual', 'etcslowperceptual'];

/**
 * Compression tool: PVRTexTool (http://cdn.imgtec.com/sdk-documentation/PVRTexTool.User+Manual.pdf)
 * WebGL extension: http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
 */
export const PVRTC = 'pvrtc';
export const IS_PVRTC = process.argv.includes(PVRTC);
export const PVRTC_SUPPORTED_INPUT_TYPES = ['.jpeg', '.jpg', '.png', '.bmp'];
export const PVRTC_SUPPORTED_OUTPUT_TYPES = ['.ktx', '.pvr'];
export const PVRTC_COMPRESSION_TYPES = ['PVRTC1_2', 'PVRTC1_4', 'PVRTC1_2_RGB', 'PVRTC1_4_RGB'];
export const PVRTC_QUALITY_TYPES = [
  'pvrtcfastest',
  'pvrtcfast',
  'pvrtcnormal',
  'pvrtchigh',
  'pvrtcbest',
];

