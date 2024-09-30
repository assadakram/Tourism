import FooterButton from './FooterButton';
import CheckboxLabel from './CheckboxLabel';
import { PopoverWrapper, Title, CloseButton, ListItemWrapper } from './styles';

const List = ({ name, items, onClose, selectedItems, onChange }) => {
  return (
    <PopoverWrapper>
      <CloseButton onClick={onClose}>&times;</CloseButton>
    <Title>
      <CheckboxLabel label="" checked isTitle />
      <span>{name}</span>
    </Title>
    <ListItemWrapper>
    {items.map((item) => (
              <CheckboxLabel key={item.id} onChange={() => onChange(item.id)} label={item.name} checked={selectedItems.has(item.id)} />
      ))}
      </ListItemWrapper>
    <FooterButton><p>Be Inspired <span>{name}</span></p> </FooterButton>
  </PopoverWrapper>
  );
};

export default List;