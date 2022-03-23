import React from 'react';

// import core base styles
import 'hds-core';
import styles from './CookieTable.module.scss';
import classNames from '../../utils/classNames';
import { Checkbox } from '../checkbox';

type Row = {
  id: string;
  name: string;
  hostname: string;
  path: string;
  description: string;
  expiration: string;
};

type Group = {
  /**
   * Unique identifier for the group.
   */
  groupId: string;
  /**
   * Table rows. An array of objects where keys map with the keys of col.
   */
  rows: Array<Row>;
};

export type CookieTableProps = {
  groups: Array<Group>;
};

export const CookieTable = ({ groups }: CookieTableProps) => {
  const addGroupDivider = (groupIndex, rowIndex) => {
    if (groupIndex === groups.length - 1) {
      return false;
    }
    return rowIndex === groups[groupIndex].rows.length - 1;
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div tabIndex={0} className={styles.container}>
      <table className={styles.table} id="cookie-table">
        <thead>
          <tr className={styles.headerRow}>
            {groups.length > 1 && <td role="presentation" className={styles.checkboxHeader} />}
            <th scope="col">Name</th>
            <th scope="col">Host name</th>
            <th scope="col">Path</th>
            <th scope="col">Description</th>
            <th scope="col">Expiration</th>
          </tr>
        </thead>
        <tbody className={styles.content}>
          {groups.map((group, groupIndex) => {
            return (
              <>
                {group.rows.map((row, rowIndex) => {
                  return (
                    <tr key={row.id} className={addGroupDivider(groupIndex, rowIndex) ? styles.groupDivider : ''}>
                      {groups.length > 1 && (
                        <td>
                          {rowIndex === 0 && <Checkbox checked id="cookie-checkbox" className={styles.checkbox} />}
                        </td>
                      )}
                      <td>{row.name}</td>
                      <td>{row.hostname}</td>
                      <td>{row.path}</td>
                      <td>{row.description}</td>
                      <td>{row.expiration}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
