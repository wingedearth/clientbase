import { APP_VERSION, IS_DEPLOYED, NODE_ENV } from '@/constants/config';
import packageJson from '../../../package.json';

const VersionController = (req, res) => {
  const host = IS_DEPLOYED ? 'deployed' : 'local';

  res.json({
    name: packageJson?.name,
    version: APP_VERSION,
    environment: NODE_ENV,
    host
  });
};

export default VersionController;
