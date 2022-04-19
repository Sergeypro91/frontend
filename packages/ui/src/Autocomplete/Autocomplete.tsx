import {
  AutocompleteRenderGetTagProps,
  AutocompleteRenderInputParams,
  ListItemIcon,
  Autocomplete as MuiAutocomplete,
} from '@mui/material';
import { HTMLAttributes } from 'react';
import { ChevronDOutlineMd, CrossSmOutlineSm } from '@astral/icons';

import { TextField } from '../TextField';
import { Tag } from '../Tag';
import { MenuItem } from '../MenuItem';
import { Checkbox } from '../Checkbox';

import { AutocompleteProps } from './types';

export const Autocomplete = <
  AutocompleteValueProps,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean
>({
  multiple,
  placeholder,
  error,
  success,
  helperText,
  label,
  size = 'medium',
  getOptionLabel,
  ...props
}: AutocompleteProps<
  AutocompleteValueProps,
  Multiple,
  DisableClearable,
  FreeSolo
>) => {
  const renderTags = (
    tags: AutocompleteValueProps[],
    getTagProps: AutocompleteRenderGetTagProps
  ) => {
    return tags.map((tag: AutocompleteValueProps, index: number) => {
      const title = (getOptionLabel && getOptionLabel(tag)) || '';

      return (
        <Tag
          deleteIcon={<CrossSmOutlineSm />}
          color="grey"
          label={title}
          {...getTagProps({ index })}
        />
      );
    });
  };

  const renderInput = (inputParams: AutocompleteRenderInputParams) => (
    <TextField
      {...inputParams}
      placeholder={placeholder}
      label={label}
      success={success}
      error={error}
      helperText={helperText}
      size={size}
    />
  );

  const renderOption = (
    option: HTMLAttributes<HTMLLIElement> & { key?: string }
  ) => {
    const selected = Boolean(option['aria-selected']);

    return (
      <MenuItem {...option} key={option.id}>
        {multiple && (
          <ListItemIcon>
            <Checkbox checked={selected} />
          </ListItemIcon>
        )}
        {option.key}
      </MenuItem>
    );
  };

  return (
    <MuiAutocomplete
      {...props}
      size={size}
      multiple={multiple}
      getOptionLabel={getOptionLabel}
      disableCloseOnSelect={multiple}
      renderTags={renderTags}
      renderInput={renderInput}
      renderOption={renderOption}
      popupIcon={<ChevronDOutlineMd />}
      clearIcon={<CrossSmOutlineSm />}
      componentsProps={{ clearIndicator: { disableRipple: true } }}
      noOptionsText="Нет данных"
    />
  );
};
