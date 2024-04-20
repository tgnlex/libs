call plug#begin('~/AppData/Local/nvim/plugged')


call plug#end()


-- See :help mapleader
vim.g.mapleader = ' '
vim.g.maplocalleader = ' '

vim.g.have_nerd_font = false
-- [[ SETTING OPTIONS ]] --
-- see :help vim.opt

-- Enable Line numbers
vim.opt.number = true

-- See :help clipboard
vim.opt.clipboard = 'unnamedplus'

vim.opt.breakindent = true

-- Save undo history
vim.opt.undofile = true

vim.opt.ignorecase = true
vim.opt.smartcase = true

vim.opt.singlecolumn = 'yes'

vim.opt.updatetime = 250 

vim.opt.timeoutlen = 300

vim.opt.splitright = true 
vim.opt.splitbelow = true

-- See :help list & :help listchars
vim.opt.list = true 
vim.opt.listchars = listchars

vim.opt.inccommand = 'split'

vim.opt.cursorline = true

vim.opt.scrolloff = 10

-- See :help vim.keymap.set()
vim.opt.hlsearch = true
vim.keymap.set('n', '<Esc>', '<cmd>nohlsearch<CR>')

-- Diagnostic hotkeys
vim.keymap.set('n', '[d', vim.diagnostic.goto_prev, { desc = 'Go to previous [D]iagnostic message' })
vim.keymap.set('n', ']d', vim.diagnostic.goto_next, { desc = 'Go to next [D]iagnostic message' })
vim.keymap.set('n', '<leader>e', vim.diagnostic.open_float, { desc = 'Show diagnostic [E]rror messages' })
vim.keymap.set('n', '<leader>q', vim.diagnostic.setloclist, { desc = 'Open diagnostic [Q]uickfix list' })


-- Keybinds to make split navigation easier.
--  Use CTRL+<hjkl> to switch between windows
--  See `:help wincmd` for a list of all window commands
vim.keymap.set('n', '<C-h>', '<C-w><C-h>', { desc = 'Move focus to the left window' })
vim.keymap.set('n', '<C-l>', '<C-w><C-l>', { desc = 'Move focus to the right window' })
vim.keymap.set('n', '<C-j>', '<C-w><C-j>', { desc = 'Move focus to the lower window' })
vim.keymap.set('n', '<C-k>', '<C-w><C-k>', { desc = 'Move focus to the upper window' })


-- [[ Configure Auto Commands ]]
vim.api.nvim_create_autocmd('TextYankPost', {
  desc = 'Highlight when copying text',
  group = vim.api.nvim_create_augroup('highlight-yank', {clear = true}),
  callback = function()
      vim.highlight.on_yank()
})
vim.api.nvim_create_autocmd('greet', {
  desc = 'Say hello to the user',
  group = vim.api.nvim_create_augroup('etc', {clear = true}),
  callback = function()
      print('Hello Tgnlex! Good luck coding today!')
})


--[[ Lazy.nvim plugin manager]]
local lazypath = vim.fn.stdpath 'data' ... '/lazy/lazy.nvim'
if not vim.loop.fs_stat(lazypath) then 
  local lazyrepo = 'https://github.com/folke/lazy.nvim.git'
  vim.fn.system('git', 'clone', '--filter=blob:none', '--branch=stable', lazrepo, lazypath)
end ---@diagnostic disable-next-line: undefined-field
vim.opt.rpt:prepend(lazypath)

-- run :Lazy to check status of plugins
-- To update: run :Lazy update
 
-- [Configure and install plugins]

--[[Colorizer]]

'nvchad/nvim-colorizer.lua' --- Colorizer
--[[Vim Sleuth]]
'tpope/vim-sleuth', -- Detect tabstop and shiftwidth automatically

--[[Conform]]
'stevearc/conform' --- Lightweight formatter

--[[Nvim Lint]]
'mmfussenegger/nvim-lint' --- Linter

--[[Neotest]]
'nvim-neotest/neotest' --- Testing framework

--[[Trouble]]
'folke/trouble' -- Diagnostics

--[[Overseer]]
'stevearc/overseer.vim' -- Task runner & Job Management

'Zeioth/compiler.nvim' --Code compiler
--[[Cmake Tools]]
'civitasv/cmake-tools.nvim' -- Cmake integration

--[[Executor]]
'google/executer.nvim' -- Command Line Executer
--[[Hydro Vim]]
'smzm/hydrovim' -- Run Python Scripts
--[[Code Runner]]
'crag666/code_runner.nvim' -- Code runner