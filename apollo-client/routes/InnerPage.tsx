import React from 'react';
import { useLocation } from 'react-router';
import logger from '../utils/logger';
const InnerPage = () => {
  const location = useLocation();
  logger.debug(location);
  return <div>InnerPage</div>;
};

export default InnerPage;