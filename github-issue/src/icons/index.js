import { BookOutlined, TagOutlined, TagsOutlined } from '@ant-design/icons';

const Icon = (iconName) => {
  switch (iconName) {
    case 'book':
      return <BookOutlined />;
    case 'label':
      return <TagOutlined />;
    case 'mileStone':
      return <TagsOutlined />;
    default:
      break;
  }
};

export default Icon;
