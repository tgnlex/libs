--  See `:help lua-guide-autocommands`
vim.api.nvim_create_autcmd('CommandName', {
  desc = 'Description',
  group = vim.api.nvim_create_autogrpup('au-group-name', {options}),
  callback = function()
  --Command Logic goes here
    print('Im a command')
  end
})