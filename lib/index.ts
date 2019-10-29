// Arguments
import { ICLIArgs } from './argsHandler';

// Compressors
import { compressWithPVRTexTool } from './compressors/compressWithPVRTexTool';

// Constants
import { COMPRESSION_FORMAT_FLAGS } from './constants';

/**
 * Pack a texture into a GPU compressed texture format
 */
export const pack = (CLIArgs?: ICLIArgs): Promise<any> => {
  let args: ICLIArgs;

  if (!CLIArgs) {
    args = require('./argsHandler').CLIArgs;
  } else {
    args = CLIArgs;
  }

  if (!args.type) {
    throw new Error(`Supported compression formats: ${COMPRESSION_FORMAT_FLAGS}`);
  }

  switch (args.type) {
    case 'etc':
    case 'pvrtc':
      return compressWithPVRTexTool(args);
    default:
      throw new Error(`Compression format: ${args.type} was not recognized`);
  }
};
