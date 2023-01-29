import styles from './ActionBar.module.css';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ActionButton from '../ActionButton/ActionButton';
import { useActions } from '../../../hooks/useActions';
import Logo from '../Logo/Logo';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className={styles.action_bar}>
      <Logo />

      <ActionButton
        icon={<ArrowUpwardOutlinedIcon />}
        onClick={() =>
          moveCell({
            id,
            direction: 'up',
          })
        }
      />
      <ActionButton
        icon={<ArrowDownwardOutlinedIcon />}
        onClick={() =>
          moveCell({
            id,
            direction: 'down',
          })
        }
      />
      <ActionButton
        icon={<ClearOutlinedIcon />}
        onClick={() => deleteCell(id)}
      />
    </div>
  );
};
export default ActionBar;
