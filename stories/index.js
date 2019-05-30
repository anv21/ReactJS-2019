import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '../src/components/Logo';
import NotFound from '../src/components/NotFound';

storiesOf('Logo', module).add('Logo', () => <Logo />);
storiesOf('NotFound', module).add('NotFound', () => <NotFound />);
