import { BookOutlined } from '@ant-design/icons';

const Icon = (iconName) => {
  switch (iconName) {
    case 'Book':
      return <BookOutlined />;
    default:
      break;
  }
};

export default Icon;
