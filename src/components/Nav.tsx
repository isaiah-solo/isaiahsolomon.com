import React from "react";

type BoxSizing = 'border-box';

const styles = {
  root: {
    background: 'white',
    boxSizing: 'border-box' as BoxSizing,
  },
  content: {
    boxSizing: 'border-box' as BoxSizing,
    display: 'flex',
    height: 'fit-content',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: 960,
    padding: 20,
  },
}

type Props = {
  leftContent?: React.ReactElement,
  rightContent?: React.ReactElement,
};

const Nav = ({
  leftContent,
  rightContent,
}: Props): React.ReactElement => {
  return (
    <header style={styles.root}>
      <div style={styles.content}>
        {leftContent}
        {rightContent}
      </div>
    </header>
  );
};

export default Nav
