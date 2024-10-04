<script setup>
</script>
<template>
  <header>
    <div class="header__logo">
        <div class="header__logo__img"></div>
        <div class="header__logo__txt"></div>
    </div>
    <div class="header__menu">
        <nav>
            <ul v-if="isDropdownOpen" class="dropduwn">
                <li v-for="item in menuItems" :key="subitem.id">
                    <a @click.prevent="toggleSubmenu(item)">{{ item.text }}</a>
                    <ul v-if="subitem in item.subitem" :key="subitem.id">
                        <li v-for="subitem in item.subitems" :key="subitem.id">
                            <a :href="subitem.href">{{ subitem.text }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
  </header>

  <template>
  <div class="menu">
    <button @click="toggleDropdown">Menu</button>
    <ul v-if="isDropdownOpen" class="dropdown">
      <li v-for="item in menuItems" :key="item.id">
        <a @click.prevent="toggleSubmenu(item)">{{ item.text }}</a>
        <ul v-if="item.isOpen" class="submenu">
          <li v-for="subitem in item.subitems" :key="subitem.id">
            <a :href="subitem.href">{{ subitem.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      menuItems: [
        {
          id: 1,
          text: 'Item 1',
          subitems: [
            { id: 1, text: 'Subitem 1', href: '#' },
            { id: 2, text: 'Subitem 2', href: '#' },
          ],
          isOpen: false,
        },
        {
          id: 2,
          text: 'Item 2',
          subitems: [
            { id: 3, text: 'Subitem 3', href: '#' },
            { id: 4, text: 'Subitem 4', href: '#' },
          ],
          isOpen: false,
        },
        {
          id: 3,
          text: 'Item 3',
          subitems: [
            { id: 5, text: 'Subitem 5', href: '#' },
            { id: 6, text: 'Subitem 6', href: '#' },
          ],
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    toggleSubmenu(item) {
      item.isOpen = !item.isOpen;
    },
  },
};
</script>

<style>
.menu {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  display: none;
}

.menu button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.menu button:hover {
  background-color: #444;
}

.dropdown li {
  margin-bottom: 10px;
}

.dropdown a {
  color: #333;
  text-decoration: none;
}

.dropdown a:hover {
  color: #666;
}

.submenu {
  padding-left: 20px;
}
</style>

<style>
.menu {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  display: none;
}

.menu button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.menu button:hover {
  background-color: #444;
}

.dropdown li {
  margin-bottom: 10px;
}

.dropdown a {
  color: #333;
  text-decoration: none;
}

.dropdown a:hover {
  color: #666;
}
</style>
</template>
